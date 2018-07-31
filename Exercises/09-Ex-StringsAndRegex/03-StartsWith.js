function solve(text, sub) {
    return text.startsWith(sub);
}

console.log(solve("How have you been?", "how"));
console.log(solve("Marketing Fundamentals, starting 19/10/2016", "Marketing Fundamentals, sta"));