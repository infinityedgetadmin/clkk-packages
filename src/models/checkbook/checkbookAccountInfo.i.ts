import { RegisteredFirebaseUserWithCheckbookAccount } from "../firebase/firebaseUser.i";
import { Timestamp } from "firebase/firestore";

interface CheckbookAccountInfo {
  id: string;
  user_id: string;
  bankDetails?: {
    routing: string;
    accNumber: string;
    accountType: string;
    checkbookBankAccountId: string;
  };
  walletDetails?: {
    wallet_id: string;
    wallet_name: string;
    createdAt: Timestamp | Date;
  };
  vccDetails?: {
    createdAt: Timestamp | Date;
    vccId: string;
  };
}

interface CheckbookAccountInfoWithWallet
  extends RegisteredFirebaseUserWithCheckbookAccount {
  checkbook: CheckbookAccountInfo & {
    walletDetails: {
      wallet_id: string;
      wallet_name: string;
      createdAt: Timestamp | Date;
    };
  };
}

interface CheckbookAccountWithVcc
  extends RegisteredFirebaseUserWithCheckbookAccount {
  checkbook: CheckbookAccountInfo & {
    vccDetails: {
      vccId: string;
      createdAt: Timestamp | Date;
    };
  };
}

interface CheckbookAccountInfoWithBank
  extends RegisteredFirebaseUserWithCheckbookAccount {
  checkbook: CheckbookAccountInfo & {
    bankDetails: {
      routing: string;
      accNumber: string;
      accountType: string;
      checkbookBankAccountId: string;
    };
  };
}

export type {
  CheckbookAccountInfo,
  CheckbookAccountInfoWithBank,
  CheckbookAccountInfoWithWallet,
  CheckbookAccountWithVcc,
};
