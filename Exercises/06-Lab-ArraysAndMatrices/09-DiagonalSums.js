function solve(input){
    let sums = [0, 0];

    let secondIndex = input.length - 1;

    for (let i = 0; i < input.length; i++) {
        sums[0] += input[i][i];
        sums[1] += input[i][secondIndex--];
    }

    return sums.join(' ');
}

console.log(solve([
    [20, 40],
    [10, 60]]));
console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));