var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0; // Initialize balance to 0
    }
    // Deposit money into the account
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            return 'Amount must be greater than zero';
        }
        this.balance += amount;
        return "Deposited ".concat(amount);
    };
    // Withdraw money from the account
    Account.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            return 'Insufficient funds';
        }
        this.balance -= amount;
        return "Withdrew ".concat(amount);
    };
    // Check the balance of the account
    Account.prototype.checkBalance = function () {
        return "Your balance is ".concat(this.balance);
    };
    return Account;
}());
// Example usage of the Account class
var myAccount = new Account();
console.log(myAccount.deposit(100)); // Deposited 100
console.log(myAccount.checkBalance()); // Your balance is 100
console.log(myAccount.withdraw(50)); // Withdrew 50
console.log(myAccount.checkBalance()); // Your balance is 50
// Test cases for Account class
var account = new Account();
// Test Deposit
console.assert(account.deposit(100) === 'Deposited 100', 'Deposit test failed');
console.assert(account.checkBalance() === 'Your balance is 100', 'Balance test failed');
// Test Withdraw
console.assert(account.withdraw(50) === 'Withdrew 50', 'Withdraw test failed');
console.assert(account.checkBalance() === 'Your balance is 50', 'Balance after withdrawal test failed');
// Test Insufficient Funds
console.assert(account.withdraw(100) === 'Insufficient funds', 'Insufficient funds test failed');
console.assert(account.checkBalance() === 'Your balance is 50', 'Balance after failed withdrawal test failed');
// Test Invalid Deposit
console.assert(account.deposit(-10) === 'Amount must be greater than zero', 'Invalid deposit test failed');
