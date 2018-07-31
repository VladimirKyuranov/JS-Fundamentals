function chesBoard(size) {
    let result = "<div class=\"chessboard\">\n";

    for (let i = 0; i < size; i++) {
        result += "  <div>\n";
        let color = (i % 2 === 0) ? "black" : "white";

        for (let j = 0; j < size; j++) {
            result += `    <span class="${color}"></span>\n`
            color = (color === "black") ? "white" : "black";
        }

        result += "  </div>\n";
    }

    result += "</div>\n"
    console.log(result);
}

chesBoard(4);