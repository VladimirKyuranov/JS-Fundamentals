function solve(input) {

    let set = new Set();

    input = input.join(' ').toLowerCase().split(/\W+/).filter(w => w != '');

    for (let word of input) {
        set.add(word);
    }

    return [...set].join(', ');
}

console.log(solve([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]));

console.log();

console.log(solve(['ttt', 'tt', 't', 't', 'tt', 'TTT']));