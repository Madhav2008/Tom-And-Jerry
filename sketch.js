var canvas, bg;
var together;
var tom, tomImg1, tomImg2;
var jerry, jerryImg1, jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    tom = createSprite(windowWidth - 400, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if (tom.x < jerry.x + 150) {
        tom.velocityX = 0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x = windowWidth - 400;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLastImage");
    }
    if (tom.x > windowWidth - 20) {
        tom.x = 20;
    }
    if (tom.x < jerry.x - 100) {
        jerry.destroy();
    }

    drawSprites();
}


function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -10;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
    if (keyCode === RIGHT_ARROW) {
        tom.velocityX = 10;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}