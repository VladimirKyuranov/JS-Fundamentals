function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

isLeapYear(1999);
isLeapYear(2000);
isLeapYear(1900);