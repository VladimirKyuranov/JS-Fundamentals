function solve(text, bannedWords) {
    for (let bannedWord of bannedWords) {
        let censor = '-'.repeat(bannedWord.length);
        while(text.indexOf(bannedWord) != -1){
            text = text.replace(bannedWord, censor);
        }
    }

    return text;
}

console.log(solve('roses are red, violets are blue', [', violets are', 'red']));