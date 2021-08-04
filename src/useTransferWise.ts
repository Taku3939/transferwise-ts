import { CreateQuoteRequest,
    CreateQuoteResponse,
    RecipentAccountRequest,
    RecipentAccountResponse,
    CreateTransferRequest,
    CreateTransferResponse,
    FundTransferRequest,
    FundTransferResponse,
    GetProfileResponse,
    TransferDeliveryTimeResponse} from ".";

export type TransferWiseClient = {
    getProfiles(): Promise<GetProfileResponse>;
    createQuote(request: CreateQuoteRequest): Promise<CreateQuoteResponse>;
    createRecipientAccount(
      request: RecipentAccountRequest
    ): Promise<RecipentAccountResponse>;
    createTransfer(
      request: CreateTransferRequest
    ): Promise<CreateTransferResponse>;
    fundTransfer(
      profileId: number,
      transferId: number,
      request: FundTransferRequest
    ): Promise<FundTransferResponse>;
    getTransferDeliveryTime(
      transferId: number
    ): Promise<TransferDeliveryTimeResponse>;
  };
  
  export type TransferWiseConfig = {
    apiKey: string;
    isSandBox: boolean;
  };
  
export const useTransferWise = (
    config: TransferWiseConfig
  ): TransferWiseClient => {
    const urls = {
      baseUrlSandbox: "https://api.sandbox.transferwise.tech",
      baseUrl: "https://api.transferwise.com",
    };
  
    const baseUrl = !config.isSandBox ? urls.baseUrl : urls.baseUrlSandbox;
  
    /**
     * You only need to call this endpoint once to obtain your user profile id. Your personal and business profiles have different IDs. Profile id values are required when making payouts.
     *
     * @returns
     */
    const getProfiles = async (): Promise<GetProfileResponse> => {
      const fetchData = await fetch(baseUrl + "/v1/profiles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
        },
      }).catch((err) => {
        throw err;
      });
  
      const data = await fetchData.json().catch((err) => {
        throw err;
      });
  
      return data;
    };
  
    /**
     * Quote fetches current mid-market exchange rate that will be used for your transfer.
     * Quote also calculates our fee and estimated delivery time.
     *
     * @param request
     * @returns
     */
    const createQuote = async (
      request: CreateQuoteRequest
    ): Promise<CreateQuoteResponse> => {
      const fetchData = await fetch(`${baseUrl}/v2/quotes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify(request),
      }).catch((err) => {
        throw err;
      });
  
      const data = fetchData.json();
      console.log(data);
  
      return data;
    };
  
    /**
     * Recipient is a person or institution who is the ultimate beneficiary of your payment.
     * @param request
     * @returns
     */
    const createRecipientAccount = async (
      request: RecipentAccountRequest
    ): Promise<RecipentAccountResponse> => {
      const fetchData = await fetch(`${baseUrl}/v1/accounts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify(request),
      }).catch((err) => {
        throw err;
      });
  
      const data = fetchData.json();
      console.log(data);
  
      return data;
    };
  
    /**
     * A transfer is a payout order you make to a recipient account based on a quote.
     * Once created, a transfer will need to be funded within the next 14 days (7 days for email transfers) or it’ll automatically get cancelled.
     *
     * @param request
     * @returns
     */
    const createTransfer = async (
      request: CreateTransferRequest
    ): Promise<CreateTransferResponse> => {
      const fetchData = await fetch(`${baseUrl}/v1/transfers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify(request),
      }).catch((err) => {
        throw err;
      });
  
      const data = fetchData.json();
      console.log(data);
  
      return data;
    };
    /**
     * This API call is the final step for executing payouts.
     * Wise will now debit funds from your multi-currency account and start processing your transfer.
     *  If your multi-currency account does not have the required funds to complete the action then this call will fail with an "insufficient funds" error.
     *
     * @param profileId
     * @param transferId
     * @param request
     * @returns
     */
    const fundTransfer = async (
      profileId: number,
      transferId: number,
      request: FundTransferRequest
    ): Promise<FundTransferResponse> => {
      const fetchData = await fetch(
        `${baseUrl}/v3/profiles/${profileId}/transfers/${transferId}/payments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${config.apiKey}`,
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify(request),
        }
      ).catch((err) => {
        throw err;
      });
  
      const data = fetchData.json();
      console.log(data);
  
      return data;
    };
  
    /**
     * Get the live delivery estimate for a transfer by the transfer ID.
     * The delivery estimate is the time at which we currently expect the transfer to arrive in the beneficiary's bank account.
     * This is not a guaranteed time, but we’re working hard to make these estimates as accurate as possible.
     */
    const getTransferDeliveryTime = async (
      transferId: number
    ): Promise<TransferDeliveryTimeResponse> => {
      const fetchData = await fetch(
        `${baseUrl}/v1/delivery-estimates/${transferId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${config.apiKey}`,
          },
        }
      ).catch((err) => {
        throw err;
      });
  
      const data = await fetchData.json().catch((err) => {
        throw err;
      });
  
      return data;
    };
    return {
      getProfiles,
      createQuote,
      createRecipientAccount,
      createTransfer,
      fundTransfer,
      getTransferDeliveryTime,
    };
  };
  