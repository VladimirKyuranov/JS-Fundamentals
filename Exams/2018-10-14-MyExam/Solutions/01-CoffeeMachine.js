function solve(input) {
    let income = 0;
    
    input.forEach(i => {
        let orderArgs = i.split(", ");
        let coins = +orderArgs[0];
        let drink = orderArgs[1];
        let totalPrice = 0;
        
        if (drink === "coffee" ) {
            let type = orderArgs[2];
            
            switch (type) {
                case "caffeine":
                    totalPrice = 0.8;
                    break;
                case "decaf":
                    totalPrice = 0.9;
                    break;
            }
            
            if (orderArgs[3] === "milk") {
                totalPrice += +(totalPrice * 0.1).toFixed(1);
                totalPrice = orderArgs[4] > 0 ? totalPrice + 0.1 : totalPrice;
            }else{
                totalPrice = orderArgs[3] > 0 ? totalPrice + 0.1 : totalPrice;
            }
        }
        
        if (drink === "tea"){
            totalPrice = 0.8;
    
            if (orderArgs[2] === "milk") {
                totalPrice += +(totalPrice * 0.1).toFixed(1);
                totalPrice = orderArgs[3] > 0 ? totalPrice + 0.1 : totalPrice;
            }else{
                totalPrice = orderArgs[2] > 0 ? totalPrice + 0.1 : totalPrice;
            }
        }
        
        if (totalPrice <= coins) {
            console.log(`You ordered ${drink}. Price: ${totalPrice.toFixed(2)}$ Change: ${(coins - totalPrice).toFixed(2)}$`);
            income += totalPrice;
        }else{
            console.log(`Not enough money for ${drink}. Need ${(totalPrice - coins).toFixed(2)}$ more.`);
        }
    });
    
    console.log(`Income Report: ${income.toFixed(2)}$`);
}

const data = [
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'];

solve(data);
