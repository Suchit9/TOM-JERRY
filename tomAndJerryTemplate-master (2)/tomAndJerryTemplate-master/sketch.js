
var cat,catImg1,catImg2,catImg3,catImg4,mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var bg;
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    catImg2= loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat3.png");
    catImg4 =   loadAnimation("images/cat4.png");
    bg = loadImage("images/garden.png");
    mouseImg1= loadAnimation("images/mouse1.png");
     mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(900,600);
cat.addAnimation("sitting",catImg2);
cat.scale = 0.2;
cat.frameDelay = 25;
cat.shapeColour = "b";

mouse = createSprite(100,600);
mouse.addAnimation("standing",mouseImg2);
mouse.scale = 0.15;

}
     
function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg4);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg1);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  


    drawSprites();
}     

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("tomRunning", catImg2);
    cat.changeAnimation("tomRunning");
    
    mouse.addAnimation("standing", mouseImg4);
    mouse.changeAnimation("standing");
    
}

}

