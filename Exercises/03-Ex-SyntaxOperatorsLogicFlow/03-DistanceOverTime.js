function calcDistance(arguments) {
    let speedA = arguments[0] * 1000 / 3600;
    let speedB = arguments[1] * 1000 / 3600;
    let distanceA = speedA * arguments[2];
    let distanceB = speedB * arguments[2];
    let distance = Math.abs(distanceA - distanceB);

    console.log(distance);
}

calcDistance([0, 60, 3600]);
calcDistance([11, 10, 120]);