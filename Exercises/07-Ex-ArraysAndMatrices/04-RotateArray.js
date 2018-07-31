function solve(input) {
    let count = parseInt(input.pop()) % input.length;

    for (let i = 0; i < count; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

console.log(solve([1, 2, 3, 4, 2]));