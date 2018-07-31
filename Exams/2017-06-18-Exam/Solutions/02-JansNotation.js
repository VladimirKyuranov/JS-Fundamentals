function solve(input) {
    let numbers = [];
    let error = false;
    for (let element of input) {
        if (element === Number(element)) {
            numbers.push(element);
        } else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
                error = true;
                break;
            }

            let num2 = numbers.pop();
            let num1 = numbers.pop();

            switch (element) {
                case '+':
                    numbers.push(num1 + num2);
                    break;
                case '-':
                    numbers.push(num1 - num2);
                    break;
                case '*':
                    numbers.push(num1 * num2);
                    break;
                case '/':
                    numbers.push(num1 / num2);
                    break;
            }
        }
    }

    if (!error){
        if (numbers.length === 1){
            console.log(numbers[0]);
        } else {
            console.log("Error: too many operands!");
        }
    }
}

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);