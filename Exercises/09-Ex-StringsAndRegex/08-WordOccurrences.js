function solve(text, word) {
    text = text.toLowerCase();
    word = word.toLowerCase();

    let regex = new RegExp(`\\b${word}\\b`, 'g');

    let match;
    let count = 0;

    while (match = regex.exec(text)){
        count++;
    }

    return count;
}

console.log(solve('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));