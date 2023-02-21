class BankAccount {
  constructor() {
    // this.transactions = [];
    this.account_start = [];
    this.domestic_balance = 0;
    this.foreign_balance = 0;
  }

  openAccount() {
    return this.account_start;
  }

  retrieveDomesticBalance() {
    return this.domestic_balance;
  }

  retrieveForeignBalance() {
    return this.foreign_balance;
  }

  BankAccount(date, type, amount, currency,)
  if (typeof currency != "USD") {
    throw new Error("the cheque you tried to deposit does not support local jurisdiction")
  }

  // }
  // FirstCreditTransaction(date, type, amount) {
}
// }
module.exports = BankAccount;
