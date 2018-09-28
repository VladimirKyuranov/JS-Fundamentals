function locateTreasures(coords) {

    for (let i = 0; i < coords.length; i += 2) {
        let x = coords[i];
        let y = coords[i + 1];

        console.log(checkIslands(x, y));
    }

    function checkIslands(x, y) {
        if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            return "Tokelau";
        }

        if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            return "Tuvalu";
        }

        if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            return "Samoa";
        }

        if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            return "Tonga";
        }

        if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            return "Cook";
        }
        
        return "On the bottom of the ocean";
    }
}

locateTreasures([4, 2, 1.5, 6.5, 1, 3, 6, 4])