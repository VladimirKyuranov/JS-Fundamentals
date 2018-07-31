function solve(input) {
    let result = [];
    let currentNumber = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= currentNumber){
            result.push(input[i]);
            currentNumber = input[i];
        }
    }

    return result.join('\n');
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));