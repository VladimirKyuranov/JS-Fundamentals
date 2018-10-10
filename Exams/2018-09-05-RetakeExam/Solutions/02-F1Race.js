function race(input) {
    let pilots = input.shift().split(/\s+/g);
    
    input.forEach(p => {
        let [command, pilot] = p.split(/\s+/g);
        let index = pilots.indexOf(pilot);
        
        switch (command) {
            case "Join":
                if (index < 0) {
                    pilots.push(pilot);
                }
                break;
            case "Crash":
                if (index > -1) {
                    pilots.splice(index, 1);
                }
                break;
            case "Pit":
                if (index > -1 && index < pilots.length - 1) {
                    pilots[index] = pilots[index + 1];
                    pilots[index + 1] = pilot;
                }
                break;
            case "Overtake":
                if (index > 0) {
                    pilots[index] = pilots[index - 1];
                    pilots[index - 1] = pilot;
                }
                break;
        }
    });
    
    return pilots.join(" ~ ");
}

const data = ["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"
];


console.log(race(data));
