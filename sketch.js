var background1, backgroundImg;
var snowfall1,snowfall2;
var snowfalls;
var joysound;
var character1,character1Img;
var character2,character2Img;
var character3,character3Img;
var character4,character4Img;


function preload() {

 
 backgroundImg=loadImage("snow1.jpg");
  snowfall1=loadImage("snow4.webp");
  snowfall2=loadImage("snow5.webp");
 joysound=loadSound("JoyMusic.mp3");

  character1Img=loadImage("character1.jpg");
  character2Img=loadImage("character2.jpg");
  character3Img=loadImage("character3.webp");
  character4Img=loadImage("character4.jpg"); 

}

function setup(){
  createCanvas(1250,600);
   
  character1=createSprite(600,500,30,80);
  character1.addImage(character1Img);
  character1.scale=0.55;

  character2=createSprite(300,500,30,80);
  character2.addImage(character2Img);
  character2.scale=0.13;

  character3=createSprite(310,250,30,80);
  character3.addImage(character3Img);
  character3.scale=0.25;

  character4=createSprite(900,330,30,80);
  character4.addImage(character4Img);
  character4.scale=0.09;

  snowfallsG=createGroup();

}

function draw() {

background(backgroundImg);



  spawnSnowfalls(); 
  drawSprites();
}

function spawnSnowfalls(){
  
if (frameCount%20===0){
  var snowfalls = createSprite(random(1100,500),10,50,50);
  snowfalls.velocityY=3;


  var rand= Math.round(random(1,2));
  switch(rand){
    case 1: snowfalls.addImage(snowfall1);
    break;
    case 2: snowfalls.addImage(snowfall2);
    break;
    default: break;
  }

   snowfalls.scale=0.1;
   snowfalls.lifetime=300;
 joysound.play();
 snowfallsG.add(snowfalls);

}

}

function keyPressed(){
  if(keyDown("RIGHT_ARROW")){
    character1.velocityX=12;
   } 
  

   
}