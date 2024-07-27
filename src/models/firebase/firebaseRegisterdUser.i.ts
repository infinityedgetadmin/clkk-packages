import type { CheckbookAccountInfo } from "../checkbook/checkbookAccountInfo.i";
import type { RegisteredFirebaseUserWithCheckbookAccount } from "./firebaseUser.i";
import type { Timestamp } from "firebase/firestore";
interface RegisteredUserWithAllPaymentMethods
  extends RegisteredFirebaseUserWithCheckbookAccount {
  checkbook: CheckbookAccountInfo & {
    walletDetails?: {
      wallet_id: string;
      wallet_name: string;
      createdAt: Timestamp | Date;
    };
    vccDetails?: {
      vccId: string;
    };
    bankDetails?: {
      routing: string;
      accNumber: string;
      accountType: string;
      checkbookBankAccountId: string;
    };
  };
}

export type { RegisteredUserWithAllPaymentMethods };
