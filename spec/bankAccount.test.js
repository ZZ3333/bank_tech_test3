// As a client i want to be able to make a deposit sum of money on a specific date
// As a client i want to be able to withdraw a sum of money on a specific date
// As a client, when i print my bank account statement, i would like it to display the dates of transactions
// As a client, when i print my bank account statement, i would like it to display the amount of transactions
// As a client, when i print my bank account statement, i would like it to display the balance of transactions

const BankAccount = require("../app/bankAccount");
const bankTransactionsModel = require("../app/bankTransactionsModel");

describe(BankAccount, () => {
  it("loads the clients bank account with a starting balance of zero after opening a new account", () => {
    const account = new BankAccount();
    expect(account.getBalance()).toEqual(0);
  });

  it("updates the account after the initial deposit of 1000 units of currency equivalent", () => {
    const account = new BankAccount();
    account.FirstTransaction(
      new bankTransactionsModel("10/01/2023", "credit", 1000)
    );
    expect(account.getBalance()).toEqual(1000);
  });
});
