function solve(input) {
    input = input.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (all, num1, num2) => +num1 * +num2);

    return input;
}