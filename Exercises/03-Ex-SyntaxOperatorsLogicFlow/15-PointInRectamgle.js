function pointInRectangle([x, y, x1, x2, y1, y2]) {
    let inside = x >= x1 && x <= x2 && y >= y1 && y <= y2;

    let position = inside ? "inside" : "outside";

    console.log(position);
}

pointInRectangle([8, -1, 2, 12, -3, 3]);
pointInRectangle([12.5, -1, 2, 12, -3, 3]);