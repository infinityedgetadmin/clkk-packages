type IdentificationType = "drivers_license" | "passport" | "national_id";

interface Name {
  first: string;
  middle?: string;
  last: string;
}

interface Address {
  street: string;
  street2?: string;
  city: string;
  subdivision: string;
  postal_code: string;
  country_code: string;
}

interface IdentificationNumber {
  type?: IdentificationType;
  issuing_country_code: string;
  identification_number: string;
}

interface CustomerProfile {
  type?: "individual" | "business";
  name?: Name;
  address?: Address;
  date_of_birth?: string;
  phone_number?: string;
  email_address?: string;
  identification_numbers?: IdentificationNumber[];
  labels?: string[];
}
