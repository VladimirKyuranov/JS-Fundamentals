function solve(input) {
    const cherryWeight = 0.009;
    const plumWeight = 0.020;
    const peachWeight = 0.140;
    const cherryPerKompot = 25;
    const plumPerKompot = 10;
    const peachPerKompot = 2.5;
    const rakiyaPerLiterFruit = 0.200;
    let cherries = 0;
    let plums = 0;
    let peaches = 0;
    let bucketFruits = 0;
    
    input.forEach(f => {
       let [fruit, liters] = f.split(/\s+/);
       
       switch (fruit) {
           case "cherry":
               cherries += +liters / cherryWeight;
               break;
           case "plum":
               plums += +liters / plumWeight;
               break;
           case "peach":
               peaches += +liters / peachWeight;
               break;
           default:
               bucketFruits += +liters;
               break;
       }
    });
    
    console.log(`Cherry kompots: ${Math.floor(cherries / cherryPerKompot)}`);
    console.log(`Peach kompots: ${Math.floor(peaches / peachPerKompot)}`);
    console.log(`Plum kompots: ${Math.floor(plums / plumPerKompot)}`);
    console.log(`Rakiya liters: ${(bucketFruits * rakiyaPerLiterFruit).toFixed(2)}`);
}

const data = [ 'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ];



solve(data);
