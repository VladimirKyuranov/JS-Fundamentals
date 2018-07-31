function solve(input) {
    let result = [];

    for (let element of input) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    return result.join("\n");
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));