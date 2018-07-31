function solve(input) {
    let words = input[0].split(/\W+/).filter(w => w != '');

    let countedWords = {};

    for (let word of words) {
        if (countedWords.hasOwnProperty(word) == false){
            countedWords[word] = 0;
        }

        countedWords[word]++;
    }

    return JSON.stringify(countedWords);
}

console.log(solve(['Far too slow, you\'re far too slow.']));