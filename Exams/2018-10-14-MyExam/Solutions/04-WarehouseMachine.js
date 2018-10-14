function solve(input) {
    let warehouse = new Map();
    input.forEach(i => {
        let [command, brand, coffee, date, quantity] = i.split(", ");
        
        switch (command) {
            case "IN":
                if (!warehouse.has(brand)){
                    warehouse.set(brand, new Map());
                }
                
                if (!warehouse.get(brand).has(coffee)) {
                    warehouse.get(brand).set(coffee, {date: date, quantity: quantity});
                }else{
                    if (warehouse.get(brand).get(coffee).date.localeCompare(date) < 0) {
                        warehouse.get(brand).set(coffee, {date: date, quantity: quantity});
                    }else if (warehouse.get(brand).get(coffee).date.localeCompare(date) < 0 === 0) {
                        warehouse.get(brand).get(coffee).quantity += quantity;
                    }
                }
                break;
            case "OUT":
                if (warehouse.has(brand) && warehouse.get(brand).has(coffee)) {
                    if (warehouse.get(brand).get(coffee).date.localeCompare(date) > 0) {
                        warehouse.get(brand).get(coffee).quantity -= quantity;
                    }
                }
                break;
            case "REPORT":
                console.log(">>>>> REPORT! <<<<<");
    
                for (const [key, value] of warehouse) {
                    console.log(`Brand: ${key}:`);
                    for (const [k, v] of value) {
                        console.log(`-> ${k} -> ${v.date} -> ${v.quantity}.`);
                    }
                }
                break;
            case "INSPECTION":
                console.log(`>>>>> INSPECTION! <<<<<`);
                let sortedBrands = [...warehouse.keys()].sort((a, b) => a.localeCompare(b));
                for (const sortedBrand of sortedBrands) {
                    console.log(`Brand: ${sortedBrand}:`);
                    
                    let sortedCoffees = [...warehouse.get(sortedBrand).keys()]
                        .sort((a, b) => warehouse.get(sortedBrand).get(b).quantity - warehouse.get(sortedBrand).get(a).quantity);
    
                    for (const sortedCoffee of sortedCoffees) {
                        console.log(`-> ${sortedCoffee} -> ${warehouse.get(sortedBrand).get(sortedCoffee).date} -> ${warehouse.get(sortedBrand).get(sortedCoffee).quantity}.`);
                    }
                }
                
                break;
        }
    });
}

solve([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);