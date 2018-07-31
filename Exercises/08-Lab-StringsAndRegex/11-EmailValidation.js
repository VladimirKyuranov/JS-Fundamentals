function solve(email) {
    let regex = /^[a-zA-Z\d]+@([a-z]+.[a-z]+)+$/;

    let result = email.match(regex);

    return result ? "Valid" : "Invalid";
}

console.log(solve("valid@email.bg"));
console.log(solve("invalid@emai1.bg"));