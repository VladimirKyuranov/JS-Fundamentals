function solve(input) {
    let data = new Map();

    for (let line of input) {
        let [town, product, price] = line.split(' | ');

        if (data.has(product) == false) {
            data.set(product, new Map());
        }

        data.get(product).set(town, +price);

    }

    for (let [product, towns] of data) {
        let minPrice = Number.MAX_VALUE;
        let minTown = '';

        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minTown})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

console.log();

solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
])