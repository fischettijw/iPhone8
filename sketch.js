let circleDiam = 50;
let xOrig = circleDiam / 2;
let yOrig = circleDiam / 2;
let xStep = 1;
let yStep = 1;
let x = xOrig;
let y = yOrig;
let shortenHeight = 50;
let iPhoneWidth = 375;
let iPhoneHeight = 667 - shortenHeight;

function setup() {
    createCanvas(iPhoneWidth, 667);
    background(220);
    noStroke();
}

function draw() {
    background(220);
    // rect(0, 600, 375, 67);
    circle(x, y, circleDiam);
    x += xStep;
    y += yStep;;
    if (x > iPhoneWidth - (circleDiam / 2)) { x = xOrig };
    if (y > iPhoneHeight - (circleDiam)) { y = yOrig };
}