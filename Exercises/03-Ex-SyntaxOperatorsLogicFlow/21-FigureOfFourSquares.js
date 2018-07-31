function draw(size) {
    let dashesCount = size - 2;
    let pipes = Math.floor((size - 3) / 2);
    pipes = (pipes < 0) ? 0 : pipes;
    let dashes = '-'.repeat(dashesCount);
    let spaces = ' '.repeat(dashesCount);

    let borderRow = `+${dashes}+${dashes}+\n`;
    let otherRow = `|${spaces}|${spaces}|\n`;


    let combo = `${borderRow}${otherRow.repeat(pipes)}`;
    let result = combo.repeat(2) + borderRow;

    return (size > 2) ? result : "+++";
}

console.log(draw(2));