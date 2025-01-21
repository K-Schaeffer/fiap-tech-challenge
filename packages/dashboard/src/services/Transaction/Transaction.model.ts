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
}

export class Transaction {
  readonly id: string;
  readonly type: string;
  readonly date: string;
  readonly value: number;
  readonly currency: string;

  constructor(data: TransactionData) {
    this.id = data.id;
    this.type = data.type;
    this.date = data.date;
    this.value = data.value;
    this.currency = data.currency;
  }
}

// Novos tipos de dados
export interface TransactionModel {
  id?: string;
  accountId?: string;
  type?: string;
  value?: number;
  from?: string;
  to?: string;
  date?: Date | string;
  anexo?: string;
  currency?: string;
  formattedDate?: string;
  formattedValue?: string;
}
