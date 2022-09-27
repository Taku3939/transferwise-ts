export type CreateQuoteRequest = {
  profile: number //	Personal or business profile id of the sender - required.
  sourceCurrency: string // Source (sending) currency code.
  targetCurrency: string // Target (receiving) currency code.
  targetAmount: number | null // Amount in target currency.
  sourceAmount: number | null // Amount in source currency.
  // Either sourceAmount or targetAmount is required, never both.
  targetAccount?: number // Optional. If provided can be used as an alternative to updating the quote.
}

export type Fee = {
  transferwise: number //	The fee to be paid by the user based on the current state of the quote.	Decimal
  payIn: number //	The fee for this payment option, based on the product type of the payment option.	Decimal
  discount: number //	Any discounts that have been applied to this quote for the user.	Decimal
  total: number //	The total fees to be paid - use this figure when displaying fees on your app.	Decimal
}

export type DissableReason = {
  code: string //	Code to denote the reason a payment method is unavailable	Text
  message: string //	User friendly message to display when a method is unavailable	Text
}
export type PaymentOption = {
  disabled: boolean //	Whether this option is enabled or not for this quote.	Boolean
  estimatedDelivery: string //	The estimated delivery time for this combination of payin and payout methods, assuming payIn is performed now.	Timestamp
  formattedEstimatedDelivery: string //	A string to display to users for the estimated delivery date.	Text
  estimatedDeliveryDelays: string[] //	Array of strings for delivery delays to display to users.	[Text]
  fee: Fee //Object containing fee information.	Fee
  sourceAmount: number //	sourceAmount when using this payment option	Decimal
  targetAmount: number //	targetAmount when using this payment option	Decimal
  payIn: string //	Type of pay in method for this payment option.	Text
  payOut: string //	Type of pay out method for this payment option.	Text
  allowedProfileTypes: string[] //	Array of the allowed types of profile to use this payment option for this quote "PERSONAL", "BUSINESS" or both.	[Text]
  disabledReason: DissableReason //	Object present if a payment option is disabled	Disabled Reason
}

export type QuoteNotice = {
  text: string //	The message to display	Text
  link: string //	URL that provides more information to the message. May be null if there's no URL.	Text
  type: string //	Type of message, WARNING or INFO or BLOCKED. If it is BLOCKED, don't allow the quote to be used to create the transfer	Text
}
export type CreateQuoteResponse = {
  id: string //	ID of this quote (GUID format).
  sourceCurrency: string //	Source (sending) currency code.
  targetCurrency: string //	Target (receive) currency code.
  sourceAmount: number //	Amount in source currency to send.
  targetAmount: number //	Amount in target currency to be received.
  payOut: string //	Mechanism we use to deliver the transfer. Not usually of interest to the user.
  rate: number //	Exchange rate value used for the conversion.
  createdTime: string //	Quote created timestamp.
  user: number //	User id who created the quote.
  profile: number //	Personal or business profile id.
  rateExpirationTime: string //	Time the locked rate will expire.
  providedAmountType: string //	Whether the quote was creates as "SOURCE" or "TARGET".
  paymentOptions: PaymentOption[] //	List of the methods a user can pay for the transfer. See above for help on choosing the correct one to display.	[PaymentOption]

  status: string //Current status of this quote, one of: "PENDING", "ACCEPTED", "FUNDED" or "EXPIRED"	Text
  expirationTime: string // 	The time the quote expires	Timestamp
  notices: QuoteNotice //	Array of messages to display the user in case of useful information based on their selections. May be empty ([]) if there are no messages.	[QuoteNotice]
}
