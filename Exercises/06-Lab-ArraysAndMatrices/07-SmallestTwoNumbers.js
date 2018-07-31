function solve(input) {
    let result = input.sort((a, b) => a - b);
    result = result.slice(0, 2);

    return result.join(' ');
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));