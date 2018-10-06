function solve(input) {
    let dict = new Map();

    for (let line of input) {
        let letter = line[0];

        if (dict.has(letter) === false){
            dict.set(letter, []);
        }

        dict.get(letter).push(line.split(' : ').join(': '));
    }

    let keys = [...dict.keys()].sort();

    let sortedDict = new Map();

    for (let key of keys) {
        sortedDict.set(key, dict.get(key).sort());
    }

    for (let [key, value] of sortedDict) {
        console.log(key);

        for (let record of value) {
            console.log(`  ${record}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);