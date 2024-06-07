//BankAccount
//Depositing
//Withrawing
//Balance

class BankAccount {
    private _balance: number;

    constructor(initialbalance: number) {
        this._balance = initialbalance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log('Invalid deposit amount');
            return;
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Invalid deposit amount');
            return;
        }

        if (this._balance - amount < 0) {
            console.log('Insufficient Funds');
            return;
        }

        this._balance - amount;
    }

    public get balance(): number {
        return this._balance;
    }
}

const myAccount: BankAccount = new BankAccount(1000);
console.log(`account: ${myAccount.balance}`);