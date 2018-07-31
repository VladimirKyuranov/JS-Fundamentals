function solve(input) {
    let result = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]){
            case "add":
                result.push(number);
                break;
            case "remove":
                result.pop();
                break;
        }

        number++;
    }

    return result.length == 0 ? "Empty" : result.join('\n');
}

console.log(solve(["add", "add", "add", "add"]));
console.log(solve(["add", "add", "remove", "add", "add"]));
console.log(solve(["remove", "remove", "remove"]));