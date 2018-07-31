function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i-k);
        let elements = result.slice(start, i);
        let element = elements.reduce((a, b) => a + b);
        result.push(element);
    }
    return result.join(' ');
}

console.log(solve(6, 3));
console.log(solve(8, 2));