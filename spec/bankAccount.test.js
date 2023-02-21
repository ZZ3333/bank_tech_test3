/*global describe, it, expect*/
/*eslint no-undef: "error"*/

const BankAccount = require("../app/bankAccount");
const BankTransactionsModel = require("../app/bankTransactionsModel");

describe(BankAccount, () => {
  it("opens a new business account in England", () => {
    const account = new BankAccount([]);
    expect(account.openAccount()).toEqual([]);
  });

  
})