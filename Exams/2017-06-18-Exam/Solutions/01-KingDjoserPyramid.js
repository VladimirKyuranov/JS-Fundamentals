function solve(base, increment) {
    let totalGold = base % 2 === 0 ? 4 : 1;
    let totalLapis = 0;
    let totalMarble = 0;
    let totalStone = 0;
    let floor = 1;
    for (let size = base; size > 2; size -= 2) {
        let stone = (size - 2) >= 0 ? (size - 2) ** 2 : 0;
        totalStone += stone;
        if (floor % 5 === 0) {
            let lapis = size * size - stone;
            totalLapis += lapis;
        } else {
            let marble = size * size - stone;
            totalMarble += marble;
        }
        floor++;
    }

    totalStone =Math.ceil(totalStone * increment);
    totalMarble =Math.ceil(totalMarble * increment);
    totalLapis =Math.ceil(totalLapis * increment);
    totalGold =Math.ceil(totalGold * increment);
    let totalHeight = Math.floor(floor * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarble}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

solve(23, 0.5);