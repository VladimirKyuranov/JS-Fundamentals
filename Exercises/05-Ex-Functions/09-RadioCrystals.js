function main(input) {
    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];

        perfectCrystal(crystal, target);
    }


    function perfectCrystal(crystal, target) {
        let cut = (crystal) => crystal / 4;
        let lap = (crystal) => crystal * 0.8;
        let grind = (crystal) => crystal - 20;
        let etch = (crystal) => crystal - 2;
        let xRay = (crystal) => crystal + 1;
        let wash = function (crystal) {
            console.log("Transporting and washing");
            return parseInt(crystal);
        };

        console.log(`Processing chunk ${crystal} microns`);
        let operations = 0;
        if (crystal >= target * 4 - 1) {
            while (crystal >= target * 4 - 1) {
                crystal = cut(crystal);
                operations++;
            }

            console.log(`Cut x${operations}`);
            operations = 0;
            crystal = wash(crystal);
        }

        if (crystal * 0.8 >= target - 1) {
            while (crystal * 0.8 >= target - 1) {
                crystal = lap(crystal);
                operations++;
            }

            console.log(`Lap x${operations}`);
            operations = 0;
            crystal = wash(crystal);
        }

        if (crystal - 20 >= target - 1) {
            while (crystal - 20 >= target - 1) {
                crystal = grind(crystal);
                operations++;
            }

            console.log(`Grind x${operations}`);
            operations = 0;
            crystal = wash(crystal);
        }

        if (crystal - 2 >= target - 1) {
            while (crystal - 2 >= target - 1) {
                crystal = etch(crystal);
                operations++;
            }

            console.log(`Etch x${operations}`);
            crystal = wash(crystal);
        }

        if (crystal + 1 == target) {
            crystal = xRay(crystal);
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${target} microns`);
    }
}

main([1375, 50000]);
main([1000, 4000, 8100]);
