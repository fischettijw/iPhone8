let x = 50;
let y = 50;

function setup() {
    createCanvas(375, 667);
    background(220);
}

function draw() {
    background(220);
    circle(x, y, 50);
    x++;
    y++;
    if (x > 325) { x = 50 };
    if (y > 617) { y = 50 };
}