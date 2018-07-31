function solve(input) {
    let towns = {};

    for (let index = 0; index < input.length; index += 2) {
        let town = input[index];
        let income = +input[index + 1];

        if (towns.hasOwnProperty(town) == false){
            towns[town] = 0;
        }

        towns[town] += income;
    }

    return JSON.stringify(towns);
}

console.log(solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));