
var cat,catImg1,catImg2,catImg3,catImg4,mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImg;

function preload() {
    //load the images here
    catImg1 =  loadAnimation("cat1.png");
    catImg2=  loadAnimation("cat2.png");
    catImg3 =  loadAnimation("cat3.png");
    catImg4 =  loadAnimation("cat4.png");
    gardenImg = loadImage("garden.png");
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png");
    mouseImg3 = loadAnimation("mouse3.png");
    mouseImg4 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,400,50,50);
cat.addAnimation("sitting",catImg1);

mouse = createSprite(400,400,50,50);
mouse.addAnimation("standing",mouseImg2);


garden = createSprite(500,500,50,50);
garden.addImage(gardenImg);
     
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

if(keyDown == LEFT_ARROW){

  mouse.addAnimation("teasing",mouseImg3);
  mouse.changeAnimation("teasing");
 mouse.frameDelay = 25; 
}

}
}
