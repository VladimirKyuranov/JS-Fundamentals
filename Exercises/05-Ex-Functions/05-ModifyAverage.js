function modify(number) {
    let numberStr = number.toString();
    let sum = 0;
    let digitsCount = numberStr.length;
    for (let i = 0; i < digitsCount; i++) {
        sum += Number(numberStr[i]);
    }
    let average = sum / digitsCount;

    let isBigger = (average) => average > 5;

    while(isBigger(average) == false){
        numberStr += 9;
        sum += 9;
        digitsCount++;
        average = sum / digitsCount;
    }

    console.log(numberStr);
}

modify(5835);