import { Transaction } from "../Transaction/Transaction.model";

export interface AccountData {
  name: string;
  balance: string;
  currency: string;
  closestTransactions: Transaction[];
}

export class Account {
  readonly name: string;
  readonly balance: string;
  readonly currency: string;
  readonly closestTransactions: Transaction[];

  constructor(data: AccountData) {
    this.name = data.name;
    this.balance = data.balance;
    this.currency = data.currency;
    this.closestTransactions = data.closestTransactions;
  }
}