var bankAccount = {
    money: 2000,
    deposit: function (amount) {
        this.money += amount;
    }
};
var myself = {
    name: 'Emerald',
    bankAccount: bankAccount,
    hobbies: ['Programming', 'Cooking']
};
console.log("\n*** BANK ACCOUNT *** \n");
console.log("Old account amount: " + myself.bankAccount.money);
myself.bankAccount.deposit(3000);
console.log("New account amount: " + myself.bankAccount.money);
