function DNA(number) {
    let dna = "ATCGTTAGGG";
    let index = 0;
    
    for (let row = 1; row <= number; row++) {
        switch (row % 4){
            case 1:
                console.log(`**${dna[index++ % dna.length]}${dna[index++ % dna.length]}**`);
                break;
            case 0:
            case 2:
                console.log(`*${dna[index++ % dna.length]}--${dna[index++ % dna.length]}*`);
                break;
            case 3:
                console.log(`${dna[index++ % dna.length]}----${dna[index++ % dna.length]}`);
                break;
        }
    }
}

DNA(10);