import { Timestamp } from "firebase/firestore";
import { CheckbookAccountInfo } from "../checkbook/checkbookAccountInfo.i";
interface UserDataRequest {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
}

interface RegisteredFirebaseUser {
  uid: string;
  email: string;
  displayName: string;
  businessName?: string;
  firstName: string;
  lastName: string;
  clkkId: string;
  createdAt: Timestamp | Date;
  termsPrivacyAccepted: boolean;
  termsAcceptedDate: Timestamp | Date | null;
  status: UserStatus;
  role: UserRole;
}

interface RegisteredFirebaseUserWithCheckbookAccount
  extends RegisteredFirebaseUser {
  checkbook: CheckbookAccountInfo;
}

// For a user with bank details
interface BankDetails {
  routingNumber: string;
  accountNumber: string;
  accountType: string;
  bankName: string;
}

interface RegisteredFirebaseUserWithBank extends RegisteredFirebaseUser {
  bankDetails: BankDetails;
}

// For a user with wallet details
interface WalletDetails {
  walletId: string;
  walletName: string;
}

interface RegisteredFirebaseUserWithWallet extends RegisteredFirebaseUser {
  walletDetails: WalletDetails;
}

enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Disabled = "disabled",
  Deleted = "deleted",
}
enum UserRole {
  User = "user",
  Admin = "admin",
}

interface CheckbookFirestoreUser {
  checkbookUserId: string;
  checkbookAccountId: string;
  createdAt: Timestamp | Date;
  email: string;
  name: string;
  clkkId: string;
  uid: string;
}

export type {
  UserDataRequest,
  RegisteredFirebaseUser,
  RegisteredFirebaseUserWithCheckbookAccount,
  RegisteredFirebaseUserWithBank,
  RegisteredFirebaseUserWithWallet,
  BankDetails,
  CheckbookFirestoreUser,
  WalletDetails,
};

export { UserStatus, UserRole };
