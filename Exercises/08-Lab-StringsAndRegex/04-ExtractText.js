function solve(input) {
    let start = input.indexOf('(');
    let end = input.indexOf(')', start + 1);
    let result = [];

    while(start != -1 && end != -1){
        result.push(input.substring(start + 1, end));
        start = input.indexOf('(', end + 1);
        end = input.indexOf(')', start + 1);
    }

    return result.join(", ");
}

console.log(solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));