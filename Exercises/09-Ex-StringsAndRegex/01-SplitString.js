function solve(text, delimiter) {
    let result = text.split(delimiter);
    return result.join('\n');
}

console.log(solve("One-Two-Three-Four-Five", '-'));