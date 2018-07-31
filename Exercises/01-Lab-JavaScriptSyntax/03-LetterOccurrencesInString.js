function getLetterCount(word, letter) {
    let count = 0;
    for(let symbol of word){
        if (symbol === letter){
            count++;
        }
    }

    console.log(count);
}

getLetterCount('hello', 'l');
getLetterCount('panther', 'n');
