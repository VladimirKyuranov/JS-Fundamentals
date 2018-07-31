function solve(input) {
    let sorted = [];

    for (let line of input) {
        let arr = JSON.parse(line)
            .map(Number)
            .sort((a, b) => b - a);
        let sum = arr.reduce((a, b) => a + b);

        if (!sorted.find(arr => arr.reduce((a, b) => a + b) === sum)) {
            sorted.push(arr);
        }
    }

    sorted.sort((a, b) => a.length - b.length)
        .forEach(a => console.log(`[${a.join(', ')}]`));
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'

]);