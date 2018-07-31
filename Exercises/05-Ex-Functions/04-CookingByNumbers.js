function cook(input) {

    let chop = (number) => number / 2;
    let dice = (number) => Math.sqrt(number);
    let spice = (number) => number + 1;
    let bake = (number) => number * 3;
    let fillet = (number) => number * 0.8;

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let func = input[i];

        switch (func) {
            case "chop":
                number = chop(number);
                break;
            case "dice":
                number = dice(number);
                break;
            case "spice":
                number = spice(number);
                break;
            case "bake":
                number = bake(number);
                break;
            case "fillet":
                number = fillet(number);
                break;
        }

        console.log(number);
    }
}

cook(["32", "chop", "chop", "chop", "chop", "chop"]);
cook(["9", "dice", "spice", "chop", "bake", "fillet"]);