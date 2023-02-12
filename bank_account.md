# Bank Account Design Recipe Template

## 1. User story

```
As a client i want to be able to make a deposit sum of money on a specific date
As a client i want to be able to withdraw a sum of money on a specific date
As a client, when i print my bank account statement, i would like it to display the dates of transactions
As a client, when i print my bank account statement, i would like it to display the amount of transactions
As a client, when i print my bank account statement, i would like it to display the balance of transactions

```

## 2. User story acceptance criteria

```
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```

## 3. User story acceptance criteria output

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

```
