function calcRoots(a, b, c) {
        let d = b * b - 4 * a * c;

        if (d < 0){
            return "No";
        }

        if (d === 0){
            return -b / (2 * a);
        }

        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        return x1 < x2 ? `${x1}\n${x2}` : `${x2}\n${x1}`
}

console.log(calcRoots(6, 11, -35));
console.log(calcRoots(1, -12, 36));
console.log(calcRoots(5, 2, 1));