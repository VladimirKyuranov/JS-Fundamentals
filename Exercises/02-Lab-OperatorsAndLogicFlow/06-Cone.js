function coneProps(r, h) {
    let base =  Math.PI * r * r;
    let volume =base * h / 3;
    let slant = Math.sqrt(r * r + h * h);
    let lateral = Math.PI * r * slant;
    let area = lateral + base;

    console.log(volume);
    console.log(area);
}

coneProps(3, 5);
coneProps(3.3, 7.8);