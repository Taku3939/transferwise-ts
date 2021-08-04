export type RecipentAccountRequest = {
  currency: string; //	3 character currency code	Text
  type: string; //	Recipient type	Text
  profile: string; //	Personal or business profile id	Integer
  accountHolderName: string; //	Recipient full name	Text
  legalType: string; //	Recipient legal type: PRIVATE or BUSINESS	Text
  details: Group; //	Currency specific fields	Group
};

export type Group = {
  sortCode: string; //	Recipient bank sort code (GBP example)	Text
  accountNumber: string; //	Recipient bank account no (GBP example)	Text
};

export type RecipentAccountResponse = {
  id: number; //	recipientAccountId	Integer
  profile: null; //	Personal or business profile id	Integer
  acccountHolderName: string; //	Recipient full name	Text
  currency: string; //	3 character country code	Text
  country: string; //	2 character currency code	Text
  type: string; //	Recipient type	Text
  details: Group; // Currency specific fields	Group
};
