function solve(input) {
    let juices = new Map();
    let bottles = new Map();

    for (let line of input) {
        let [juice, quantity] = line.split(' => ');

        if (juices.has(juice) === false) {
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + +quantity);

        if (juices.get(juice) >= 1000) {
            let bottlesCount = parseInt(juices.get(juice) / 1000);
            if (bottles.has(juice) === false) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + bottlesCount);

            juices.set(juice, juices.get(juice) % 1000);
        }
    }

    for (let [juice, quantity] of bottles) {
        if (quantity > 0) {
            console.log(`${juice} => ${quantity}`);
        }
    }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

console.log();

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])