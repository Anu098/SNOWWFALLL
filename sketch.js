var snowflake,snowflakeImg
var snow2Img;

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  snow2Img = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  createCanvas(displayWidth, displayHeight);
  background(snow2Img);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}