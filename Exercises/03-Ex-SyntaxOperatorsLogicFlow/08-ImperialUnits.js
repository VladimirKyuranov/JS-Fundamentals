function inchesToFeet(inches) {
    let feet = Math.floor(inches / 12);
    inches %= 12;

    console.log(`${feet}'-${inches}"`);
}

inchesToFeet(36);
inchesToFeet(55);
inchesToFeet(11);