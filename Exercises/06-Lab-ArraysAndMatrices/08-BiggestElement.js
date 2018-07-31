function solve(input) {
    for (let row = 0; row < input.length; row++) {
        input[row] = input[row].sort((a, b) => b - a);
        input[row] = input[row][0];
    }

    input.sort((a, b) => b - a);
    let result = input[0];
    return result;
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145]]));
console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));