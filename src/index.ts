import fetch from "node-fetch";

export type PersonalProfile = {
  id: number; // Personal profile id
  type: string; // Profile type
  details: PersonalDetails; // Personal detail field
};

export type PersonalDetails = {
  firstName: string; // Person first name
  lastName: string; // Person last name
  dateOfBirth: "yyyy-mm-dd"; // Date of birth	"yyyy-mm-dd"
  phoneNumber: string; // Phone number	Text
  avatar: string; // Link to avatar image	Text
  occupation: string | null; // Occupation	Text
  primaryAddress: number; // Address object id	Integer
};

export type BusinessDetail = {
  name: string; // Business name
  registrationNumber: string; // Business registration number
  acn: string; // ACN (only applicable for Australian business)
  abn: string; // ABN (only applicable for Australian business)
  arbn: string; // ARBN (only applicable for Australian business)	Text
  companyType: string; // Company legal type
  companyRole: string; // Person's role in the company
  descriptionOfBusiness: string; //	Business description
  primaryAddress: number; // Address object id
  webpage: string; // Webpage URL
};

export type BusinessProfile = {
  id: number; // Business profile id
  type: string; // Profile type
  details: BusinessDetail; // Business detail field
};

export type Response = {
  PersonalProfile: PersonalDetails;
  BusinessProfile?: BusinessDetail;
};

export type TransferWiseClient = {
  getProfiles(): Promise<Response>;
};

export type TransferWiseConfig = {
  apiKey: string;
  isSandBox: boolean;
};
export const CreateClient = (
  config: TransferWiseConfig
): TransferWiseClient => {
  const urls = {
    baseUrlSandbox: "https://api.sandbox.transferwise.tech",
    baseUrl: "https://api.transferwise.com",
  };

  const url = config.isSandBox ? urls.baseUrl : urls.baseUrlSandbox;
  const getProfiles = async (): Promise<Response> => {
    const fetchData = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${config.apiKey}` },
    });
    const data = await fetchData.json();

    return data;
  };

  return { getProfiles };
};
