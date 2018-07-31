function radar([speed, area]) {
    let limit = getLimit(area);
    return getSpeeding(limit, speed);
    function getSpeeding(limit, speed) {
        let speeding = speed - limit;

        if (speeding <= 0){
            return "";
        }

        if (speeding <= 20){
            return "speeding";
        }

        if (speeding <= 40){
            return "excessive speeding";
        }

        return "reckless driving";
    }

    function getLimit(area) {
        switch (area) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
                break;
            case "city":
                return 50;
                break;
            case "residential":
                return 20;
                break;
        }
    }
}

console.log(radar([40, "city"]));
console.log(radar([21, "residential"]));
console.log(radar([120, "interstate"]));
console.log(radar([200, "motorway"]));