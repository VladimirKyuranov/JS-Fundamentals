function colorfulNumbers(number) {
    let result = "<ul>\n";

    for (let i = 1; i <= number; i++) {
        let color = (i % 2 === 0) ? "blue" : "green";
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`
    }

    result += "</ul>\n"
    console.log(result);
}

colorfulNumbers(10)