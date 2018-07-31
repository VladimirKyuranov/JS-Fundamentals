function isPrime(number) {
    let prime = true;
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
        }
    }

    console.log(prime && number > 1);
}

isPrime(7);
isPrime(8);
isPrime(81);