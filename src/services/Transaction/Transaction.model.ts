export class Transaction {
  constructor (id: number, type: string, date: string, amount: number, currency: string) {
    Object.assign(this, {
      id,
      type,
      date,
      amount,
      currency,
    })
  }
}