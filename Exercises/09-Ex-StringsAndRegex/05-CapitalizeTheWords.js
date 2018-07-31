function solve(input) {
    let arr = input.split(' ');

    for (let index = 0; index < arr.length; index++) {
        arr[index] = `${arr[index][0].toUpperCase()}${arr[index].slice(1).toLowerCase()}`
    }

    return arr.join(' ');
}

console.log(solve("Capitalize these words"));
console.log(solve("Was that Easy? tRY thIs onE for SiZe!"));