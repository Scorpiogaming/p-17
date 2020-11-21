
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 var survivalTime=0;
function preload(){
  //write the second hint over here load animations
 monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating monkey and ground sprites here
   monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
   ground=createSprite(400,350,900,10);
  
  //also create foodgroup and obstaclegroup
 FoodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
  
  background(255);
  
 
  if(ground.x<0)  {
   ground.x = ground.width/2;
   
   
   }
  
  console.log(ground.y)
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
 monkey.velocityY = monkey.velocityY + 0.5;
  
 monkey.collide(ground)
  
  ground.velocityX=-3;
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  
    if(obstaclesGroup.isTouching(monkey)){
      monkey.velocityY=0;
      ground.velocityX=0;
        FoodGroup.setVelocityXEach(0);
      obstaclesGroup.setVelocityXEach(0);
    }
      
      stroke("white");
      textSize(20);
      fill("white");
      text("Score:"+score,500,50);
      
      stroke("black");
     textSize(20);
      fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
      text("Survival Time:"+survivalTime,100,50);
    

}



function spawnFood() {
  
  if(frameCount%80==0){
    banana=createSprite(600,250,10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
   banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function spawnObstacles() {
   if(frameCount%100==0){
    obstacle=createSprite(700,300,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime=300;
     obstacle.scale=0.1;
     obstaclesGroup.add(obstacle);
 
   }
}