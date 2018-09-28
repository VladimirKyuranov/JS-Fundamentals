function isPointInside(coords) {
    for (let i = 0; i < coords.length; i+= 3) {
        let x = coords[i];
        let y = coords[i + 1];
        let z = coords[i + 2];

        let xIn = x >= 10 && x <= 50;
        let yIn = y >= 20 && y <= 80;
        let zIn = z >= 15 && z <= 50;

        let inside = xIn && yIn && zIn;

        console.log(inside ? "inside" : "outside");
    }
}

isPointInside([8, 20, 22]);
isPointInside([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);