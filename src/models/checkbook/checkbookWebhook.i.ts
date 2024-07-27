interface CheckbookCheckData {
  amount: number;
  comment: string | null;
  date: string;
  description: string;
  id: string;
  image_uri: string;
  name: string;
  number: number;
  recipient: string;
  remittance_advice: any[];
  status: string;
}
export { CheckbookCheckData };
