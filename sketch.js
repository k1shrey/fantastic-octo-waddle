var img,imgImg,imgImg2;
var garden,cat,mouse;
var gardenImg,cat1Img,mouse1Img;
var garden,cat,mouse;

function preload() {
    
    gardenImg=loadImage("Images/garden.png");
    cat1Img=loadImage("Images/cat1.png");
    cat2Img=loadAnimation("Images/cat2.png","Images/cat3.png");
    cat3Img=loadImage("Images/cat4.png");
    mouse1Img=loadImage("Images/mouse1.png");
    mouse2Img=loadAnimation("Images/mouse2.png","Images/mouse3.png");
    mouse3Img=loadImage("Images/mouse4.png");

}

function setup(){
    garden=createSprite(400,300);
    garden.addImage(gardenImg);
    garden.visible=true;
  
    cat=createSprite(680,540);
    cat.addImage("Moving",cat1Img);
    cat.scale=0.1;
    cat.debug=false;
    cat.setCollider("rectangle",0,0,800,800);
  
    mouse=createSprite(60,540);
    mouse.addImage("Teasing",mouse1Img);
    mouse.scale=0.1;
    mouse.debug=false;
    mouse.setCollider("rectangle",0,0,800,900);

    block1=createSprite(400,488,200,60);
    block1.visible=false;

}

function draw() {
background(gardenImg);
   
        if(cat.x-mouse.x<(cat.width-mouse.width/2)){
        cat.velocityX=0;
        cat.addImage("Moving",cat3Img);
        mouse.addImage("Teasing",mouse3Img);
       
}

    drawSprites();
}


function keyPressed(){
    if(keyDown(LEFT_ARROW)){
        cat.velocityX=-2;
        cat.addAnimation("Moving",cat2Img);
        mouse.addAnimation("Teasing",mouse2Img);
      }
      if(keyDown(RIGHT_ARROW)){
        cat.velocityX=0;
        cat.addImage("Moving",cat1Img);
        mouse.addImage("Teasing",mouse1Img);
      }
    
  

}
