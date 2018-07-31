function solve(input) {
    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z\d -]+)$/;

    let result = [];

    for (let employee of input) {
        let match = regex.exec(employee);
        if (match){
            result.push(
                `Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`
            )
        }
    }

    return result.join('\n');
}

console.log(solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
));