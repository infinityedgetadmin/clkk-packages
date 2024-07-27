interface CreateVccResponse {
  card_number: string;
  cvv: string;
  expiration_date: string;
  id: string;
}

interface VccAddress {
  //   city: string; //Taking zip for now
  //   country: string;
  //   line1: string;
  //   line2: string | null;
  //   state: string;
  zip: string;
}

interface Vcc {
  address: VccAddress;
  balance: string;
  card_number: string;
  date: string;
  default: boolean;
  expiration_date: string;
  id: string;
  name: string | null;
}

interface VccQueryResponse {
  vccs: Vcc[];
}

interface Transaction {
  amount: number;
  created_ts: string | null;
  description: string | null;
  id: string | null;
  type: string | null;
}

interface VccTransactionsResponse {
  page: number;
  pages: number;
  total: number;
  transactions: Transaction[];
}

export type {
  CreateVccResponse,
  Vcc,
  VccQueryResponse,
  VccTransactionsResponse,
};
