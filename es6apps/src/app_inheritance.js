class Account {
    constructor() {
        console.log('Account class')
    }
    deposit() {
        return 0
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account')
    }
    deposit() {
        return 100
    }
}

let sb = new SavingsAccount()
console.log(sb.deposit())