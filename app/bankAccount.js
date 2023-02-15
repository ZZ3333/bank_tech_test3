class BankAccount {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
