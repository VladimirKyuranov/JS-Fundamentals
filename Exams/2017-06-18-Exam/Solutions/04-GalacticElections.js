function solve(input) {
    let systems = new Map();
    let winners = new Map();
    let grandTotalVotes = 0;
    
    input.forEach(b => {
        if (!systems.has(b.system)) {
            systems.set(b.system, new Map());
        }
        
        if (!systems.get(b.system).has(b.candidate)) {
            systems.get(b.system).set(b.candidate, 0);
        }
        
        systems.get(b.system)
            .set(b.candidate, systems.get(b.system).get(b.candidate) + b.votes);
        
        grandTotalVotes += b.votes;
    });
    
    for (const [system, candidates] of systems) {
        let winner = [...candidates.keys()]
            .sort((a, b) => candidates.get(b) - candidates.get(a))[0];
        let votes = [...candidates.values()]
            .reduce((a, b) => a + b);
        
        if (!winners.has(winner)) {
            winners.set(winner, {systemsWon: [], totalVotes: 0});
        }
        
        winners.get(winner).systemsWon.push({system, votes});
        winners.get(winner).totalVotes += votes;
    }
    
    let leaderboard = [...winners.keys()]
        .sort((a, b) => winners.get(b).totalVotes - winners.get(a).totalVotes);
    let winnerName = leaderboard[0];
    let secondName = leaderboard[1];
    let first = winners.get(winnerName);
    let second = winners.get(secondName);
    
    if (!second) {
        console.log(`${winnerName} wins with ${first.totalVotes} votes`);
        console.log(`${winnerName} wins unopposed!`);
        return;
    }
    
    if (first.totalVotes > grandTotalVotes / 2) {
        console.log(`${winnerName} wins with ${first.totalVotes} votes`);
        console.log(`Runner up: ${secondName}`);
        for (const system of second.systemsWon.sort((a, b) => b.votes - a.votes)) {
            console.log(`${system.system}: ${system.votes}`);
        }
    } else {
        let winnerPercentage = Math.floor((first.totalVotes / grandTotalVotes) * 100);
        let secondPercentage = Math.floor((second.totalVotes / grandTotalVotes) * 100);
        console.log(`Runoff between ${winnerName} with ${winnerPercentage}% and ${secondName} with ${secondPercentage}%`);
    }
}

const data = [
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 100},
    {system: 'Theta', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
    {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
    {system: 'Omicron', candidate: 'Octocat', votes: 75}
];

solve(data);
