function solve(text) {
    let regex = /\w+/g;
    let words = text.match(regex);
    return words.join('|');
}

console.log(solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));