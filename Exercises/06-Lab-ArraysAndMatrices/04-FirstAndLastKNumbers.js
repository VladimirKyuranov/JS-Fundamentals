function solve(input) {
    let count = input.shift();
    let firstElements = input.slice(0, count);
    let lastElements = input.slice(input.length - count);

    let result = `${firstElements}\n${lastElements}`
    return result;
}

console.log(solve([2, 7, 8, 9]));
console.log(solve([3, 6, 7, 8, 9]));