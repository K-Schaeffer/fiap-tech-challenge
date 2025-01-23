export interface TransactionInput {
  id: number;
  type: string;
  value: number;
  currency: string;
  date: string;
  userId: number;
}

export interface TransactionData {
  id: number;
  type: string;
  date: string;
  value: number;
  currency: string;
  fileBase64?: string;
  fileName?: string;
  userId?: number;
}

export class Transaction {
  readonly id: number;
  readonly type: string;
  readonly date: string;
  readonly value: number;
  readonly currency: string;
  readonly fileBase64?: string;
  readonly fileName?: string;
  readonly userId?: number;

  constructor(data: TransactionData) {
    this.id = data.id;
    this.type = data.type;
    this.date = data.date;
    this.value = data.value;
    this.currency = data.currency;
    this.fileBase64 = data.fileBase64;
    this.fileName = data.fileName;
    this.userId = data.userId;
  }
}
