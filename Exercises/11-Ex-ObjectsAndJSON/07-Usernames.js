function solve(input) {
    input.sort((a, b) => {
        return a.length - b.length === 0 ? a.localeCompare(b) : a.length - b.length;
    });

let set = new Set();

for (let element of input) {
    set.add(element);
}

console.log([...set].join('\n'));
}

solve([
    'Rot',
    'Dean',
    'Iris',
    'Biser',
    'Indie',
    'Isacc',
    'Bounty',
    'Denise',
    'Renard',
    'Enfuego',
    'Benjamin',
    'Ignatius',
    'Donatello'
]);