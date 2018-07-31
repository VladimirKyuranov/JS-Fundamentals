function getTrip(coords) {
    let x1 = coords[0];
    let y1 = coords[1];
    let x2 = coords[2];
    let y2 = coords[3];
    let x3 = coords[4];
    let y3 = coords[5];

    let distance1 = getDistance(x1, y1, x2, y2);
    let distance2 = getDistance(x1, y1, x3, y3);
    let distance3 = getDistance(x2, y2, x3, y3);
    let trip123 = distance1 + distance3;
    let trip132 = distance2 + distance3;
    let trip213 = distance1 + distance2;

    let shortestTrip = Math.min(trip123, trip132, trip213);

    switch (shortestTrip){
        case trip123:
            return `1->2->3: ${trip123}`;
            break;
        case trip132:
            return `1->3->2: ${trip132}`;
            break;
        case trip213:
            return `2->1->3: ${trip213}`;
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
}

console.log(getTrip([0, 0, 2, 0, 4, 0]));
console.log(getTrip([5, 1, 1, 1, 5, 4]));
console.log(getTrip([-1, -2, 3.5, 0, 0, 2]));