function getEvens(input) {
    let result = "";
    for (let i = 0; i < input.length; i += 2) {
        result += `${input[i]} `;
    }

    return result;
}

console.log(getEvens(['20', '30', '40']));
console.log(getEvens(['5', '10']));