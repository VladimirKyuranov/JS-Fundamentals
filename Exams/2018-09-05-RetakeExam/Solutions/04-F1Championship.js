function championship(input) {
    let scoreboard = new Map();
    
    input.forEach(i => {
        let [team, pilot, points] = i.split(" -> ");
        
        if (!scoreboard.has(team)) {
            scoreboard.set(team, new Map());
        }
        
        if (!scoreboard.get(team).has(pilot) && scoreboard.get(team).size < 2) {
            scoreboard.get(team).set(pilot, 0);
        }
        
        if (scoreboard.get(team).has(pilot)) {
            scoreboard.get(team).set(pilot, scoreboard.get(team).get(pilot) + +points);
        }
    });
    
    let sortedKeysTeams = [...scoreboard.keys()].sort((a, b) =>
        [...scoreboard.get(b).values()].reduce((c, d) => c + d) -
        [...scoreboard.get(a).values()].reduce((c, d) => c + d));
    
    let counter = 0;
    
    for (const team of sortedKeysTeams) {
        console.log(`${team}: ${[...scoreboard.get(team).values()].reduce((a, b) => a + b)}`);
    
        let sortedPilots = [...scoreboard.get(team).keys()]
            .sort((a, b) => scoreboard.get(team).get(b) - scoreboard.get(team).get(a));
    
        for (const pilot of sortedPilots) {
            console.log(`-- ${pilot} -> ${scoreboard.get(team).get(pilot)}`);
        }
        
        if (++counter === 3) {
            break;
        }
    }
}

const data = [
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4",
    "Mercedes -> Lewis Hamilton -> 25",
    "Mercedes -> Valteri Bottas -> 18",
    "Haas -> Romain Grosjean -> 25",
    "Haas -> Kevin Magnussen -> 25"
];

championship(data);
