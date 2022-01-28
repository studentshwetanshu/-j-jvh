




var trampoline,trampolineImage;
var boy,boyImg
var invisibleGround

function preload(){
boyImg=loadImage("rrr.jpg")
trampolineImage=loadImage("iss.png")
}


function setup() {
 
 
  createCanvas(1000,700);
  boy = createSprite(410, 400, 50, 50);
  boy.addImage(boyImg)
  boy.scale=0.5
  boy.velocityY=0

  trampoline=createSprite(400,580,50,50)
  trampoline.addImage(trampolineImage)


   invisibleGround = createSprite(400,530,1600,10);
  invisibleGround.visible = false;
  
}

function draw() {

 
  background("#FDF100");  
  drawSprites();

  if(keyWentDown("space")){
 
    boy.velocityY = -12;
  
    
  }
  boy.velocityY = boy.velocityY + 0.8


  boy.collide(invisibleGround);
  
}