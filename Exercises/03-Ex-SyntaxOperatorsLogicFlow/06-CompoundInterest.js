function compoundInterest(arguments) {
    let principalSum = arguments[0];
    let interestRate = arguments[1] / 100;
    let compoundFrequency = 12 / arguments[2];
    let timeSpan = arguments[3];

    let result = principalSum * ((1 + interestRate / compoundFrequency) ** (compoundFrequency * timeSpan));
    console.log(result);
}

compoundInterest([1500, 4.3, 3, 6]);