function solve(input) {
    input.shift();
    let towns = [];

    for (let line of input) {
        line = line.split(/\|/).filter(l => l !== '');
        let town = {Town:line[0].trim(), Latitude:+line[1], Longitude:+line[2]};
        towns.push(town);
    }

    return JSON.stringify(towns);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));