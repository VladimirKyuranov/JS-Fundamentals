function binaryToDecimal(number) {
    let result = 0;

    for (let num = 0; num < number.length; num++){
        if (number[num] == 1){
            result += 2 ** (number.length - num - 1);
        }
    }

    console.log(result);
}

binaryToDecimal("00001001");