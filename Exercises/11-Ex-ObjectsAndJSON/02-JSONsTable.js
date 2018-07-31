function solve(input) {
    String.prototype.htmlEscape = function(){
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let result = '<table>\n';

    for (let line of input) {
        let obj = JSON.parse(line);

        let values = Object.values(obj);

        result += '    <tr>\n';

        for (let value of values) {
            result += `        <td>${value.toString().htmlEscape()}</td>\n`
        }

        result += '    <tr>\n';
    }

    result += '</table>';
    return result;
}

console.log(solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));