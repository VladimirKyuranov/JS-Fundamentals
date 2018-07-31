function solve(data) {

    for (let index = 0; index < data.length; index++) {
        data[index] = hide(data[index]);
    }

    return data.join('\n');

    function hide(data) {
        let nameRegex = /\*[A-Z][a-zA-Z]*(?= |\t|$)/g;
        let phoneRegex = /\+[\d-]{10}(?= |\t|$)/g;
        let idRegex = /\![a-zA-Z\d]+(?= |\t|$)/g;
        let baseRegex = /_[a-zA-Z\d]+(?= |\t|$)/g;

        data = data.replace(nameRegex, m => '|'.repeat(m.length))
            .replace(phoneRegex, m => '|'.repeat(m.length))
            .replace(idRegex, m => '|'.repeat(m.length))
            .replace(baseRegex, m => '|'.repeat(m.length));

        return data;
    }
}

console.log(solve(['Agent *Ivankov was in the room when it all happened.',
'The person in the room was heavily armed.',
'Agent *Ivankov had to act quick in order.',
'He picked up his phone and called some unknown number.',
'I think it was +555-49-796',
'I can\'t really remember...',
'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
'Then after that he disappeared from my sight.',
'As if he vanished in the shadows.',
'A moment, shorter than a second, later, I saw the person flying off the top floor.',
'I really don\'t know what happened there.',
'This is all I saw, that night.',
'I cannot explain it myself...']));