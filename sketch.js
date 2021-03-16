let circleDiam = 50;
let xOrig = circleDiam / 2;
let yOrig = circleDiam / 2;
let xStep = 3;
let yStep = 4;
let x = xOrig;
let y = yOrig;
let shortenHeight = 0;
let iPhoneWidth = 375;
let iPhoneHeight = 667 - shortenHeight;

function setup() {
    createCanvas(iPhoneWidth, 667);
    background(220);
    noStroke();
}

function draw() {
    background(220);
    circle(x, y, circleDiam);
    x += 2 * xStep;
    y += 2 * yStep;;
    if (x > iPhoneWidth - (circleDiam / 2)) { x = xOrig };
    if (y > iPhoneHeight - (circleDiam / 2)) { y = yOrig };
}