function createObject(arguments) {
    let firstName = arguments[0];
    let firstValue = arguments[1];
    let secondName = arguments[2];
    let secondValue = arguments[3];
    let thirdName = arguments[4];
    let thirdValue = arguments[5];

    let obj = {[firstName]:firstValue, [secondName]:secondValue, [thirdName]:thirdValue};

    console.log(obj);
}

createObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);