import { Transaction } from "../Transaction/Transaction.model";

export class Account {
  readonly name: string;
  readonly balance: string;
  readonly currency: string;
  readonly closestTransactions: Transaction[];

  constructor(data: Account) {
    this.name = data.name;
    this.balance = data.balance;
    this.currency = data.currency;
    this.closestTransactions = data.closestTransactions;
  }
}