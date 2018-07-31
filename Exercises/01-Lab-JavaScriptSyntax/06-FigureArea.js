function figureArea(w, h, W, H) {
    let firstArea = w * h;
    let secondArea = W * H;
    let commonArea = Math.min(h, H) * Math.min(w, W);
    let area = firstArea + secondArea - commonArea;
    console.log(area);
}

figureArea(2, 4, 5, 3);
figureArea(13, 2, 5, 8);