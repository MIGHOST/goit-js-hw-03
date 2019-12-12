"use strict";
//task-7

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

createTransaction  (id, type, amount)  {
  return {id,
        type,
        amount,
  }
},   

 /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */


    deposit(amount) {      
      this.createTransaction("id-1",Transaction.DEPOSIT, amount)
      this.balance += amount;
      this.transactions.push(this.createTransaction("id-1",Transaction.DEPOSIT, amount)); 

      return this.createTransaction("id-1",Transaction.DEPOSIT, amount)
    
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.createTransaction("id-2",Transaction.WITHDRAW, amount);
    if (amount > this.balance) {
      console.log("Not enough money");
    } else {
      this.balance -= amount;
      this.transactions.push(this.createTransaction("id-2",Transaction.WITHDRAW, amount));}

  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const key of this.transactions) {
      if (key.id === id) {
        return key;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let amountCurrentTransaction = 0;
    for (const transaction of this.transactions) {
      if(transaction.type === type) {
        amountCurrentTransaction += transaction.amount;
      } else if (transaction.type === type) {
        amountCurrentTransaction += transaction.amount;
      }
    }
 return amountCurrentTransaction;
  }
};


account.deposit(1500);
// account.withdraw(2250);
// account.deposit(2250);
// account.withdraw(1250);


// 
console.log(account.balance);
console.log(account.transactions)
// console.log(account.getTransactionDetails("id-2"));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT))


