function draw(size) {
    let row = "";
    for (let i = 1; i <= size; i++) {
        console.log(row += "$");
    }
}

draw(5);