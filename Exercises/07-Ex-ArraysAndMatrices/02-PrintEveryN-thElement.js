function solve(input) {
    let result = [];
    let count = parseInt(input.pop());

    for (let i = 0; i < input.length; i++) {
        if (i % count === 0){
            result.push(input[i]);
        }
    }

    return result.join('\n')
}

console.log(solve(["5", "20", "31", "4", "20", "2"]));