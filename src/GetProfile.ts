export type PersonalProfile = {
  id: number; // Personal profile id
  type: string; // Profile type
  details: PersonalDetails; // Personal detail field
};

export type Occupation = {
  code: string;
  format?: string;
};
export type PersonalDetails = {
  firstName: string; // Person first name
  lastName: string; // Person last name
  dateOfBirth: string; // Date of birth	"yyyy-mm-dd"
  phoneNumber: string; // Phone number	Text
  avatar: string | null; // Link to avatar image	Text
  occupation: string | null; // Occupation	Text
  occupations: any;
  primaryAddress: number; // Address object id	Integer
  firstNameInKana: string | null;
  lastNameInKana: string | null;
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

export type GetProfileResponse = [
  PersonalProfile: PersonalProfile,
  BusinessProfile?: BusinessProfile
];

