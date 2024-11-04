import { Transaction } from "../Transaction/Transaction.model";

export interface AccountData {
  fullName: string;
  firstName: string;
  balance: number;
  currency: string;
  closestTransactions: Transaction[];
}

export class Account {
  readonly fullName: string;
  readonly firstName: string;
  readonly balance: number;
  readonly currency: string;
  readonly closestTransactions: Transaction[];

  constructor(data: AccountData) {
    this.fullName = data.fullName;
    this.firstName = data.firstName;
    this.balance = data.balance;
    this.currency = data.currency;
    this.closestTransactions = data.closestTransactions;
  }
}
