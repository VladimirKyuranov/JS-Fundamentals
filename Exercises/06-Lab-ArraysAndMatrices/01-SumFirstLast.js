function calcSum(input) {
    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);
    let sum = first + last;
    return sum;
}

console.log(calcSum(['20', '30', '40']));
console.log(calcSum(['5', '10']));