let circleDiam = 50;
let xOrig = circleDiam / 2;
let yOrig = circleDiam / 2;
let xStep = 1;
let yStep = 1;
let x = xOrig;
let y = yOrig;
let shortenHeight = 0;
let iPhoneWidth = 375;
let iPhoneHeight = 667 - shortenHeight;

function setup() {
    createCanvas(iPhoneWidth, 667);
    background(220);
    stroke(3);
    line(0, 100, 667, 100);
    noStroke();
}

function draw() {
    background(220);

    stroke(3);
    line(50, 50, 325, 50);
    line(0, 100, 667, 100);
    line(0, 200, 667, 200);
    line(0, 300, 667, 300);
    line(0, 400, 667, 400);
    line(0, 500, 667, 500);
    line(0, 540, 667, 540);
    line(0, 600, 667, 600);
    noStroke();
    fill('magenta');
    circle(x, y, circleDiam);
    x += 2 * xStep;
    y += 2 * yStep;;
    if (x > iPhoneWidth - (circleDiam / 2)) { x = xOrig };
    if (y > 540 - (circleDiam / 2)) { y = yOrig };
    noStroke();
    fill("white");
    rect(0, 540, 375, 126);

}