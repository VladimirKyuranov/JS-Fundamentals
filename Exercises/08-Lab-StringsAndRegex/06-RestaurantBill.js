function solve(input) {
    let products = input.filter((a, i) => i % 2 == 0);
    let prices = input.filter((a, i) => i % 2 != 0).map(x => Number(x));
    let total = prices.reduce((a, b) => a + b);

    return `You purchased ${products.join(", ")} for a total sum of ${total}`
}

console.log(solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
console.log(solve(['Cola', '1.35', 'Pancakes', '2.88']));