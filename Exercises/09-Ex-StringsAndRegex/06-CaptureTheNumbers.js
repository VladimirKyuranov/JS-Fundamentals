function solve(input) {
    let text = input.join(' ');
    let regex = /\d+/g;
    let result = text.match(regex);
    return result.join(' ');
}

console.log(solve(
    ['The300',
     'What is that?',
     'I think it’s the 3rd movie.',
     'Lets watch it at 22:45']
));