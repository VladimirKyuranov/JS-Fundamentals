function solve(input) {

    String.prototype.htmlEscape = function(){
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let result = "<ul>\n";

    for (let text of input) {
        result += `  <li>${text.htmlEscape()}</li>\n`;
    }

    result += "</ul>";

    return result;
}

console.log(solve(['<b>unescaped text</b>', 'normal text']));
console.log();
console.log(solve(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));