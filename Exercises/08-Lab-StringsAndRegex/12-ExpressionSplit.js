function solve(input) {
    input = input.split(/[(),;.\s]+/).join('\n');
    return input;
}

console.log(solve('let sum = 4 * 4,b = "wow";'));
console.log();
console.log(solve('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));