function solve(input) {
    let all = [];

    for (let line of input) {
        let heroArgs = line.split(/ \/ |, / );
        let heroName = heroArgs.shift();
        let heroLevel = +heroArgs.shift();

        let hero = {name:heroName, level:heroLevel, items:heroArgs};

        all.push(hero);
    }

    return JSON.stringify(all);
}

console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));