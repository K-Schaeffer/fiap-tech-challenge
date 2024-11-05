export interface TransactionInput {
  type: string;
  amount: number;
  currency: string;
  date: string;
}

export interface TransactionData {
  id: string;
  type: string;
  date: string;
  amount: number;
  currency: string;
}

export class Transaction {
  readonly id: string;
  readonly type: string;
  readonly date: string;
  readonly amount: number;
  readonly currency: string;

  constructor(data: TransactionData) {
    this.id = data.id;
    this.type = data.type;
    this.date = data.date;
    this.amount = data.amount;
    this.currency = data.currency;
  }
}
