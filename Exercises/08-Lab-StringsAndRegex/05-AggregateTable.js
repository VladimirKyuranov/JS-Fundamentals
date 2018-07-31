function solve(input) {
    let parsed = input.join('').split('|').map(x => x.trim()).filter(x => x != '');
    let towns = parsed.filter((a, i) => i % 2 == 0);
    let incomes = parsed.filter((a, i) => i % 2 != 0).map(x => Number(x));
    let total = incomes.reduce((a, b) => a + b);

    return `${towns.join(", ")}\n${total}`;
}

console.log(solve([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
));