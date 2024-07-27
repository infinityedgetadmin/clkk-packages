import { FieldValue, Timestamp } from "firebase/firestore";

interface BusinessData {
  addedOn: Date | Timestamp | FieldValue;
  email: string;
  managerId: string;
  type: string;
  clkkId: string;
  displayName: string;
  businessId: string;
  walletDetails?: {
    wallet_id: string;
    wallet_name: string;
    createdAt: Timestamp | Date;
  };
  bankDetails?: {
    routing: string;
    accNumber: string;
    accountType: string;
    checkbookBankAccountId: string;
    createdAt: Timestamp | Date;
  };
  cardDetails?: {
    name: string;
    id: string;
    card_number: string;
    expiration_date: string;
    default: boolean;
    user_id: string;
    clkk_id: string;
    added_on: Date;
    user_email: string;
    manager_id: string;
    business_name: string;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    createdAt: Timestamp | Date;
  };
}

enum BusinessType {
  Individual = "individual",
  Business = "business",
}

export type { BusinessData };
export type { BusinessType };
