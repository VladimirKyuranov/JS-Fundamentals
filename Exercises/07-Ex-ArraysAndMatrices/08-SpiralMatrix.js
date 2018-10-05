function solve(rows, cols) {
    let matrix = new Array(rows);

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = new Array(cols);
    }

    let element = 1;
    let currRow = 0;
    let currCol = 0;
    let offset = 0;

    while(element <= rows * cols){

    for (let col = offset; col < cols - offset; col++) {
        if (element > rows * cols) {
            break;
        }
        matrix[currRow][col] = element++;
        currCol++;
    }

    currCol--;
    currRow++;

    for (let row = currRow; row < rows - offset; row++) {
        if (element > rows * cols) {
            break;
        }
        matrix[row][currCol] = element++;
        currRow++;
    }

    currRow--;
    currCol--;

    for (let col = currCol; col >= 0 + offset; col--) {
        if (element > rows * cols){
            break;
        }
        matrix[currRow][col] = element++;
        currCol--;
    }

    offset++;
    currCol++;
    currRow--;

    for (let row = currRow; row >=  offset; row--) {
        if (element > rows * cols){
            break;
        }
        matrix[row][currCol] = element++;
        currRow--;
    }

    currRow++;
    currCol++;


    }

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row].join(' ');
    }

    return matrix.join('\n');
}

console.log(solve(5, 5));
console.log();
console.log(solve(3, 3));
console.log();
console.log(solve(5, 7));
console.log();
console.log(solve(8, 3));