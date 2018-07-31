function solve(input) {
    let inventory = input.shift().split(' ');

    for (let line of input) {
        if (line == 'Fight!') {
            break;
        }

        let [command, item] = line.split(' ');

        switch (command) {
            case 'Buy':
                if (inventory.indexOf(item) > -1 === false) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                let trashIndex = inventory.indexOf(item);

                if (trashIndex > -1) {
                    inventory.splice(trashIndex, 1);
                }
                break;
            case 'Repair':
                let repairIndex = inventory.indexOf(item);

                if (repairIndex > -1) {
                    inventory.splice(repairIndex, 1);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                let [upgradeItem, upgrade] = item.split('-');
                let upgradeIndex = inventory.indexOf(upgradeItem);
                let upgraded = `${upgradeItem}:${upgrade}`;
                if (upgradeIndex > -1) {
                    inventory.splice(upgradeIndex + 1, 0, upgraded);
                }
                break;
        }
    }

    return inventory.join(' ');
}

console.log(solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]));

console.log(solve([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
    'Fight!'
]));