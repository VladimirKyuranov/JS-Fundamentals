function fromJSONToHTMLTable(input) {

    String.prototype.htmlEscape = function(){
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let table = JSON.parse(input);
    let result = "<table>\n  <tr>";
    let keys = Object.keys(table[0]);

    keys.forEach(k => result += `<th>${k.htmlEscape()}</th>`)
    result += "</tr>\n";

    for (let record of table) {
        result += "  <tr>"
        let keys = Object.keys(record);
        keys.forEach(k => result += `<td>${record[k].toString().htmlEscape()}</td>`)
        result += "</tr>\n"
    }

    result += "</table>";
    return result;
}

console.log(fromJSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));