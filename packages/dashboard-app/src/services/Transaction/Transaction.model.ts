export interface TransactionInput {
  type: string;
  value: number;
  currency: string;
  date: string;
}

export interface TransactionData {
  id: string;
  type: string;
  date: string;
  value: number;
  currency: string;
  fileBase64: string;
  fileName: string;
}

export class Transaction {
  readonly id: string;
  readonly type: string;
  readonly date: string;
  readonly value: number;
  readonly currency: string;
  readonly fileBase64: string;
  readonly fileName: string;

  constructor(data: TransactionData) {
    this.id = data.id;
    this.type = data.type;
    this.date = data.date;
    this.value = data.value;
    this.currency = data.currency;
    this.fileBase64 = data.fileBase64;
    this.fileName = data.fileName;
  }
}
