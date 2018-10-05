function solve(input) {
    input.sort((a, b) => a.toLowerCase()
        .localeCompare(b.toLowerCase()))
        .sort((a, b) => a.length - b.length);

    return input.join('\n');
}

console.log(solve(["alpha", "beta", "gamma"]));
console.log();
console.log(solve(["Isaac", "Theodor", "Jack", "Harrison", "George"]));
console.log();
console.log(solve(["test", "Deny", "omen", "Default"]));