import { TransactionModel } from "./../Transaction/Transaction.model";
export interface AccountData {
  fullName: string;
  firstName: string;
  balance: number;
  currency: string;
}

//Novos dados
export interface AccountModel {
  id: string;
  type: string;
  userId: string;
}

export interface AccountInfoModel {
  account?: Array<AccountModel>;
  transactions?: Array<TransactionModel>;
  cards?: Array<CardModel>;
  balance?: number;
  currency?: string;
  fullName?: string;
}

export interface CardModel {
  id?: string;
  accountId?: string;
  type?: string;
  is_blocked?: boolean;
  number?: string;
  dueDate?: string;
  functions?: string;
  cvc?: string;
  paymentDate?: string | null;
  name?: string;
}
