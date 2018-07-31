function solve(input) {
    let nums = input.join(' ').split(' ').map(Number);
    let result = [];
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == 32656 && nums[index + 1] == 19759 &&
            nums[index + 2] == 32763){
            let count = nums[index + 4];
            let code = nums.slice(index + 6, index + 6 + count);
            let word = code.map(w => String.fromCharCode(w)).join('');
            result.push(word);
        }
    }

    return result.join('\n');
}

console.log(solve([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
]));