let circleDiam = 50;
let xOrig = circleDiam / 2;
let yOrig = circleDiam / 2;
let xStep = 2;
let yStep = 1;
let x = xOrig;
let y = yOrig;
let iPhoneWidth = 375;
let iPhonwHeight = 667;


function setup() {
    createCanvas(iPhoneWidth, iPhonwHeight);
    background(220);
    noStroke();
}

function draw() {
    background(220);
    rect(0, 600, 375, 67);
    circle(x, y, circleDiam);
    x += xStep;
    y += yStep;;
    if (x > 350) { x = 50 };
    if (y > 642) { y = 50 };
}