function distance3D(coords) {
    let x1 = coords[0];
    let y1 = coords[1];
    let z1 = coords[2];
    let x2 = coords[3];
    let y2 = coords[4];
    let z2 = coords[5];

    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2)
    console.log(distance);
}

distance3D([1, 1, 0, 5, 4, 0]);
distance3D([3.5, 0, 1, 0, 2, -1]);