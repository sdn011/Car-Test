var car, wall
var speed, weight
var deformationNumber

function preload(){

}

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = color(80, 80, 80)
  speed = random(55, 90)
  weight = random(400, 1500)
}

function draw() {
  background(255,255,255);
  
  deformationNumber = 0.5*weight*speed*speed/22500;

  drawSprites();
  collision();
}

function collision(){
  if(car.x - wall.x < car.width/2 + wall.width/2 &&
     car.x - wall.x > car.width/2 + wall.width/2 && 
     car.y - wall.y < car.height/2 + wall.height/2 &&
     car.y - wall.y < car.height/2 + wall.height/2){
      if(deformationNumber < 100){
        car.shapeColor = color(0, 255, 0)
      }
      
      if(deformationNumber > 100 && deformationNumber < 180){
        car.shapeColor = color(230, 230, 0)
      }
    
      if(deformationNumber > 180){
        car.shapeColor = color(255, 0, 0)
      }
  }
}