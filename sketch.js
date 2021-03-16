let circleDiam = 50;
let xOrig = circleDiam / 2;
let yOrig = circleDiam / 2;
let xStep = 1;
let yStep = 1;
let x = xOrig;
let y = yOrig;
let iPhoneWidth = 375;
let iPhonwHeight = 667;
let shortenHeight = 100;


function setup() {
    createCanvas(iPhoneWidth, iPhonwHeight - shortenHeight);
    background(220);
    noStroke();
}

function draw() {
    background(220);
    rect(0, 600, 375, 67);
    circle(x, y, circleDiam);
    x += xStep;
    y += yStep;;
    if (x > iPhoneWidth - (circleDiam / 2)) { x = xOrig };
    if (y > iPhonwHeight - shortenHeight - (circleDiam / 2)) { y = yOrig };
}