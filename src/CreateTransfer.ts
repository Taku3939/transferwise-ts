export type CreateTranferDetails = {
  reference?: string // (optional)	Recipient will see this reference text in their bank statement. Maximum allowed characters depends on the currency route. Read the Business Payments Tips article for more information.	Text
  transferPurpose?: string // (conditionally required)	For example when target currency is THB. See more about conditions at Transfers.Requirements	Text
  sourceOfFunds?: string // (conditionally required)	For example when target currency is USD and transfer amount exceeds 10k. See more about conditions at Transfers.Requirements	Text
}
export type CreateTransferRequest = {
  targetAccount: number // Recipient account id. You can create multiple transfers to same recipient account.	Integer
  quoteUuid: string //Quote uuid. You can only create one transfer per one quote. You cannot use same quote uuid to create multiple transfers.	Text
  customerTransactionId: string //	This is required to perform idempotency check to avoid duplicate transfers in case of network failures or timeouts.	Text
  details: CreateTranferDetails // details
}

export type CreateTransferResponse = {
  id: number //	Transfer id	Integer
  user: number //	Your user id	Integer
  targetAccount: number //	Recipient account id	Integer
  sourceAccount: number | null //	Not used	Integer
  quote: number //	Quote id	Integer
  quoteUuid: string //	Quote uuid	Text
  status: string //	Transfer current status	Text
  reference: string //	Deprecated, use details.reference instead	Text
  rate: number //	Exchange rate value	Decimal
  created: string //	Timestamp when transfer was created	Timestamp
  business: number //	Your business profile id	Integer
  transferRequest: number | null //	Not used	Integer
  details: string //.reference	Payment reference text	Text
  hasActiveIssues: boolean //	Are there any pending issues which stop executing the transfer?	Boolean
  sourceCurrency: string //	Source currency code	Text
  sourceValue: number //	Transfer amount in source currency	Decimal
  targetCurrency: string //	Target currency code	Text
  targetValue: number //	Transfer amount in target currency	Decimal
  customerTransactionId: string //	Unique identifier assigned by customer. Used for idempotency check purposes.	Text
}
