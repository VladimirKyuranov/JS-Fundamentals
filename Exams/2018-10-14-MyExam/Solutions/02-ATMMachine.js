function solve(input) {
    let banknotes = [];
    let totalCashInATM = 0;
    
    input.forEach(i => {
        if (i.length === 1) {
            let banknote = +i[0];
            let count = banknotes.filter(b => b === banknote).length;
            console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);
        } else if (i.length === 2) {
            let balance = +i[0];
            let moneyToWithdraw = +i[1];
            let temp = moneyToWithdraw;
            if (balance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`);
            } else if (totalCashInATM < moneyToWithdraw) {
                console.log("ATM machine is out of order!");
            } else {
                banknotes = banknotes.sort((a, b) => b - a);
                
                while (temp > 0) {
                    let first = banknotes.shift();
                    if (temp >= first) {
                        temp -= first;
                    } else {
                        banknotes.push(first);
                    }
                }
                
                balance -= moneyToWithdraw;
                totalCashInATM -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${balance}$. Thank you!`);
            }
        } else if (i.length > 2) {
            let insertedMoney = 0;
            i.forEach(b => {
                banknotes.push(+b);
                insertedMoney += +b;
            });
            totalCashInATM += insertedMoney;
            console.log(`Service Report: ${insertedMoney}$ inserted. Current balance: ${totalCashInATM}$.`);
        }
    })
}

const data = [
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
];

solve(data);