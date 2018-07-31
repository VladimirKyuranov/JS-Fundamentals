function boxesNeeded(bottles, capacity) {
    let result = Math.ceil(bottles / capacity)

    console.log(result);
}

boxesNeeded(20, 5);
boxesNeeded(15, 7);
boxesNeeded(5, 10);