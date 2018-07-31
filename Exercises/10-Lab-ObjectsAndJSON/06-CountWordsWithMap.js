function solve(input) {
    let words = input[0].toLowerCase().split(/\W+/).filter(w => w != '');

    let countedWords = new Map();

    for (let word of words) {
        if (countedWords.has(word) == false){
            countedWords.set(word, 0);
        }

        countedWords.set(word, countedWords.get(word) + 1);
    }

    let result = '';

    let keys = Array.from(countedWords.keys());

    for (let key of keys.sort()) {
        result += `'${key}' -> ${countedWords.get(key)} times\n`
    }

    return result;
}

console.log(solve(['Far too slow, you\'re far too slow.']));