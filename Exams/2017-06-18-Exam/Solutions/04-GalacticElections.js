function solve(input) {
    let systems = new Map();
    
    input.forEach(b => {
        if (!systems.has(b.system)) {
            systems.set(b.system, new Map());
        }
        
        if (!systems.get(b.system).has(b.candidate)){
            systems.get(b.system).set(b.candidate, 0);
        }
        
        systems.get(b.system)
            .set(b.candidate, systems.get(b.system).get(b.candidate) + b.votes);
    
    });
    
    
}

const data = [
    {system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}
];

solve(data);
