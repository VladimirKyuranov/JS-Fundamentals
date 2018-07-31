function createTable(size) {
    let result = "<table border=\"1\">\n";
    result += "<tr><th>x</th>";

    for (let i = 1; i <= size; i++) {
        result += `<th>${i}</th>`;
    }

    result += "</tr>\n"

    for (let i = 1; i <= size; i++) {
        result += `  <tr><th>${i}</th>`;

        for (let j = 1; j <= size; j++) {
            result += `<td>${i * j}</td>`;
        }

        result += "</tr>\n";
    }

    result += "</table>\n";

    return result;
}

console.log(createTable(5));