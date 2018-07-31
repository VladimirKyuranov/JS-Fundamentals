function solve(input) {
    let cols = input[0];
    let rows = input[1];
    let startRow = input[2];
    let startCol = input[3];

    let matrix = new Array(rows);

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = new Array(cols);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let rowOffset = Math.abs(startRow - row);
            let colOffset = Math.abs(startCol - col);

            matrix[row][col] = 1 + Math.max(rowOffset, colOffset);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row].join(' ');
    }

    return matrix.join('\n');
}

console.log(solve([5, 4, 1, 2]));
console.log();
console.log(solve([5, 5, 1, 1]));