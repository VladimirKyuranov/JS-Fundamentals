function solve(text) {
    let regex = /\b_([a-zA-Z\d]+)\b/g;
    let result = [];
    let match;

    while(match = regex.exec(text)){
        result.push(match[1]);
    }

    return result.join(',');
}

console.log(solve('The _id and _age variables are both integers.'));