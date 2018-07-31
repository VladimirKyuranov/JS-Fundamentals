function solve(input) {
    let towns = new Map();

    for (let line of input) {
        let townInfo = line.split(' <-> ');
        let town = townInfo[0];
        let population = townInfo[1];

        if (towns.has(town) == false){
            towns.set(town, 0);
        }

        towns.set(town, towns.get(town) + +population);
    }

    let result = [];

    towns.forEach((k, v) => result.push(`${v} : ${k}`));

    return result.join('\n');
}

console.log(solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));
console.log();
console.log(solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));