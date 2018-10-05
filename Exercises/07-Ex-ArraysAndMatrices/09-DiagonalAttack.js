function solve(input){
    let sums = [0, 0];

    for (let row = 0; row < input.length; row++) {
        input[row] = input[row].split(' ');
    }

    let secondIndex = input.length - 1;

    for (let i = 0; i < input.length; i++) {
        sums[0] += Number(input[i][i]);
        sums[1] += Number(input[i][secondIndex--]);
    }

    if (sums[0] === sums[1]){
        for (let row = 0; row < input.length; row++) {
            for (let col = 0; col < input.length; col++) {
                if (row !== col && row !== input.length - 1 - col){
                    input[row][col] = sums[0];
                }
            }
        }
    }

    for (let row = 0; row < input.length; row++) {
        input[row] = input[row].join(' ');

    }

    return input.join('\n');
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));