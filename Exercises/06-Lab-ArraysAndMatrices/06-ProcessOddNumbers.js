function solve(input) {
    let result = input.filter((a, i) => i % 2 != 0);
    result = result.reverse();
    result = result.map(a => a * 2);

    return result.join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));