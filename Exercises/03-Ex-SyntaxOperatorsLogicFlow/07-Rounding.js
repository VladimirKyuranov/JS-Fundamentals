function round(arguments) {
    let number = arguments[0];
    let precision = (arguments[1] > 15) ? 15 : arguments[1];

    console.log(Number(number.toFixed(precision)));
}

round([3.1415926535897932384626433832795, 2]);
round([10.5, 3]);