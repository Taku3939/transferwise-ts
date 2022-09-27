export type FundTransferRequest = {
  type: string //"BALANCE". This indicates that your transfer will be funded from your multi-currency account.	Text
}

export type FundTransferResponse = {
  type: string //	"BALANCE"	Text
  status: string //	"COMPLETED" or "REJECTED"	Text
  errorCode: string //	Failure reason. For example "balance.payment-option-unavailable"	Text
}
