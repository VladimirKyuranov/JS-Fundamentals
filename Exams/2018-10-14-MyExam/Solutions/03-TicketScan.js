function solve(info, requiredInfo) {
    let passengerPattern = / [A-Z][a-zA-Z]*(-[A-Z][a-zA-Z]*\.)?-[A-Z][a-zA-Z]* /;
    let airportPattern = / [A-Z]{3}[/][A-Z]{3} /;
    let flightNumberPattern = / [A-Z]{1,3}[\d]{1,5} /;
    let companyPattern = /- [A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]* /;
    
    let passenger = info.match(passengerPattern)[0].trim().replace("-", " ");
    passenger = passenger.replace("-", " ");
    let airport = info.match(airportPattern)[0].trim();
    let flightNumber = info.match(flightNumberPattern)[0].trim();
    let company = info.match(companyPattern)[0].substring(1).trim().replace("*", " ");
    let [fromAirport, toAirport] = airport.split("/");
    
    switch (requiredInfo) {
        case "name":
            console.log(`Mr/Ms, ${passenger}, have a nice flight!`);
            break;
        case "flight":
            console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
            break;
        case "company":
            console.log(`Have a nice flight with ${company}.`);
            break;
        case "all":
            console.log(`Mr/Ms, ${passenger}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
            break;
    }
}

solve(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');