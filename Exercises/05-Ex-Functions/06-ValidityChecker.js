function validate(coords) {
    let x1 = coords[0];
    let y1 = coords[1];
    let x2 = coords[2];
    let y2 = coords[3];

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    function checkDistance(x1, y1, x2, y2) {
        let distance = getDistance(x1, y1, x2, y2);
        let result = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        if (distance == parseInt(distance)) {
            result += "valid";
        } else {
            result += "invalid";
        }
        console.log(result);
    }

    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);
}

validate([3, 0, 0, 4]);
validate([2, 1, 1, 1]);