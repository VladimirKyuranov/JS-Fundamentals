function solve(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmets = parseInt(fightsCount / 2);
    let swords = parseInt(fightsCount / 3);
    let shields = parseInt(fightsCount / 6);
    let armors = parseInt(shields / 2);

    let expenses = helmets * helmetPrice + swords * swordPrice
    + shields * shieldPrice + armors * armorPrice;

    let result = `Gladiator expenses: ${expenses.toFixed(2)} aureus`

    return result;
}

console.log(solve(7, 2, 3, 4, 5));

console.log(solve(23, 12.50, 21.50, 40, 200));