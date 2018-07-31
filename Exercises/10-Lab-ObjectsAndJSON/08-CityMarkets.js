function solve(input) {

    let towns = new Map();

    for (let line of input) {
        let [town, product, quantity, price] = line.split(/ -> | : /);
        let income = Number(quantity) * Number(price);

        if (towns.has(town) == false){
            towns.set(town, new Map());
        }

        if (towns.get(town).has(product) == false){
            towns.get(town).set(product, 0);
        }

        towns.get(town).set(product, towns.get(town).get(product) + income);
    }

    let result = '';

    for (let [key, value] of towns) {
        result += `Town - ${key}\n`;
        for (const [k, v] of value) {
            result += `$$$${k} : ${v}\n`;
        }
    }

    return result;
}

console.log(solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
));