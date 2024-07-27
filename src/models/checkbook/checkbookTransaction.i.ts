export interface CheckbookCheckTransaction {
  amount: number;
  comment: string | null;
  date: string;
  description: string;
  id: string;
  image_uri: string;
  metadata: {
    recipientClkkId: string;
    recipientEmail: string;
    recipientName: string;
    senderClkkId: string;
    senderEmail: string;
    senderName: string;
  };
  name: string;
  number: number;
  paymentMethod: PaymentMethod;
  paymentProvider: string;
  recipient: string;
  recipientId: string;
  remittance_advice: any[];
  senderId: string;
  status: string;
}

export enum PaymentMethod {
  BANK = "bankAccount",
  WALLET = "wallet",
  VCC = "virtualCard",
}
