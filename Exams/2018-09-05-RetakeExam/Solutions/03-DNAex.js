function dna(input) {
    let regex = /([a-z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)/;
    let validInputs = new Map();
    
    input
        .forEach(i => {
            if (i === "Stop!"){
                return;
            }
           let match = regex.exec(i);
           
           if (match) {
               let genome = match[1].split(/[!@#$?]/).join("");
               let length = +match[2];
               let amount = +match[3];
               let organism = match[4];
               
               if (genome.length === length) {
                   if (!validInputs.has(organism)){
                       validInputs.set(organism, 0);
                   }
                   
                   validInputs.set(organism, validInputs.get(organism) + amount);
               }
           }
        });
    
    let sortedKeys = [...validInputs.keys()]
        .sort((a, b) => validInputs.get(b) - validInputs.get(a));
    
     for (const key of sortedKeys) {
         console.log(`${key} has genome size of ${validInputs.get(key)}`);;
    }
}

const data = [
    "!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"
];

dna(data);