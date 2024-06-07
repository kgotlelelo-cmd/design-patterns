//BankAccount
//Depositing
//Withrawing
//Balance
var BankAccount = /** @class */ (function () {
    function BankAccount(initialbalance) {
        this._balance = initialbalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log('Invalid deposit amount');
            return;
        }
        this._balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log('Invalid deposit amount');
            return;
        }
        if (this._balance - amount < 0) {
            console.log('Insufficient Funds');
            return;
        }
        this._balance - amount;
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var myAccount = new BankAccount(1000);
console.log("account: ".concat(myAccount.balance));
