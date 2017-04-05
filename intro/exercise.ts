type bankAccountType = {
    money:   number,
    deposit: (amount: number) => void
};

type userType = {
    name:        string,
    bankAccount: bankAccountType,
    hobbies:     [string]
}

let bankAccount: bankAccountType = {
    money:   2000,
    deposit: function(amount: number): void {
        this.money += amount;
    }
}

let myself: userType = {
    name:        'Emerald',
    bankAccount,
    hobbies:     ['Programming', 'Cooking']
};

console.log("\n*** BANK ACCOUNT *** \n");
console.log(`Old account amount: ${myself.bankAccount.money}`);
myself.bankAccount.deposit(3000);
console.log(`New account amount: ${myself.bankAccount.money}`);