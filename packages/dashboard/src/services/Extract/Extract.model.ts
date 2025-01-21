import { TransactionModel } from "../Transaction/Transaction.model";

export interface ExtractModel {
  transactions: TransactionModel;
  balance: number;
}
