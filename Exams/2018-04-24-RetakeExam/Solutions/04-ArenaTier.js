function solve(input) {
    let gladiators = new Map();

    for (let line of input) {
        let [arg1, del1, arg2, del2, arg3] = line.split(' ');
        switch (del1) {
            case '->':
                let gladiator = arg1;
                let technique = arg2;
                let skill = +arg3;

                if (gladiators.has(gladiator) == false) {
                    gladiators.set(gladiator, new Map());
                }

                if (gladiators.get(gladiator).has(technique) == false) {
                    gladiators.get(gladiator).set(technique, skill);
                }

                if (gladiators.get(gladiator).get(skill) < skill) {
                    gladiators.get(gladiator).set(technique, skill);
                }
                break;
            case 'vs':
                let gladiatorOne = arg1;
                let gladiatorTwo = arg2;

                if (gladiators.has(gladiatorOne) == false || gladiators.has(gladiatorTwo) == false) {
                    break;
                }

                let sameTechniquePresent = false;

                for (let [techniqueOne, value] of gladiators.get(gladiatorOne)) {
                    if (gladiators.get(gladiatorTwo).has(techniqueOne)) {
                        sameTechniquePresent = true;
                    }
                }

                if (sameTechniquePresent == false) {
                    break;
                }

                let skillOne = [...gladiators.get(gladiatorOne).values()].reduce((a, b) => a + b);
                let skillTwo = [...gladiators.get(gladiatorTwo).values()].reduce((a, b) => a + b);

                if (skillOne === skillTwo) {
                    break;
                }

                if (skillOne > skillTwo) {
                    gladiators.delete(gladiatorTwo);
                } else {
                    gladiators.delete(gladiatorOne);
                }
                break;
            case 'Cesar':
                let sortedGladiators = [...gladiators.keys()];
                sortedGladiators.sort((a, b) => {
                    let skillA = [...gladiators.get(a).values()].reduce((x, y) => x + y);
                    let skillB = [...gladiators.get(b).values()].reduce((x, y) => x + y);

                    return skillB - skillA === 0 ? a.localeCompare(b) : skillB - skillA;
                });

                for (let gladiator of sortedGladiators) {
                    let totalSkill = [...gladiators.get(gladiator).values()].reduce((x, y) => x + y);

                    console.log(`${gladiator}: ${totalSkill} skill`);

                    let sortedSkills = [...gladiators.get(gladiator).keys()];
                    sortedSkills.sort((a, b) => {
                        let skillDiff = gladiators.get(gladiator).get(b) - gladiators.get(gladiator).get(a);
                        return skillDiff === 0
                            ? a.localeCompare(b)
                            : skillDiff;
                    });

                    for (let skill of sortedSkills) {
                        console.log(`- ${skill} <!> ${gladiators.get(gladiator).get(skill)}`);
                    }
                }
                break;
        }
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);