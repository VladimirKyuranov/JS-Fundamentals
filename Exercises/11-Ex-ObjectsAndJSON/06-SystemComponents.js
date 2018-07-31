function solve(input) {
    let systems = new Map();

    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');

        if (systems.has(system) === false) {
            systems.set(system, new Map());
        }

        if (systems.get(system).has(component) === false) {
            systems.get(system).set(component, []);
        }

        systems.get(system).get(component).push(subcomponent);
    }

    let systemsKeys = Array.from(systems.keys())
        .sort((a, b) => {
           return systems.get(b).size - systems.get(a).size === 0
                ? a.toLowerCase().localeCompare(b.toLowerCase())
                : systems.get(b).size - systems.get(a).size;
        });

    for (let system of systemsKeys) {
        console.log(system);

        let componentsKeys = Array.from(systems.get(system).keys())
            .sort((a, b) => systems.get(system).get(b).length - systems.get(system).get(a).length);

        for (let component of componentsKeys) {
            console.log(`|||${component}`);
            console.log(systems.get(system).get(component).map(x => `||||||${x}`).join('\n'));

        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreB | B24',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreA | A23',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);