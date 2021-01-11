var titleImage
var bgImg


function preload(){
  titleImage=loadImage("images/th.png");
  bgImg=loadImage("images/bg1.jpg");
}

function setup() {
  createCanvas(700,700);
  
}

function draw() {
  background("black");
  imageMode(CENTER) ;
  image(bgImg,350,350,700,700) 
  image(titleImage,350,45,200,100);
  drawSprites();
}