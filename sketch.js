
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var fruit,obstacle;
var iground;
var sc=0;
var gameState="play";
var mouse;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
  
  monkey=createSprite(150,390,20,20);
  monkey.addAnimation('monkey_running',monkey_running);
  monkey.scale=0.1;
  
      
  mouse=createSprite(300,200,50,50);
  mouse.shapeColor="aqua";
  
  ground=createSprite( 150,425,1200,20);
  ground.velocityX=-4;
  
    
  iground=createSprite( 150,441,1200,40);
  iground.visible=false;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("white");
  
  if(gameState==="play"){
monkey.collide(iground);
  monkey.visible=true;
  ground.visible=true;
  if(ground.x<- 0){
    ground.x=300;
  }
  
    mouse.visible=false;
  ground.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
  if(keyDown("space") && monkey.y>390){
    monkey.velocityY=-15 ;
    
  }
    monkey.velocityY= monkey.velocityY+0.5;
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    sc=sc+1;
  }
  
    obstacleGroup.depth= monkey.depth;
    monkey.depth=monkey.depth+1;
    
  if(monkey.isTouching(obstacleGroup)){
    gameState="end";
  }
    console.log(gameState)
      obstacles();
      fruits();
  
   
    
      text(sc,20,20)

  }else if(gameState==="end"){

    mouse.visible=true;
    //Visiblity
    monkey.visible=false;
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    ground.visible=false;
    //no Wrong
    var hi="R";

    
    if(gameState==="end" && keyDown("r") || mousePressedOver(mouse)){
      
      gameState="play"; 
      sc=0; 
      reset();
     
  
    }
    
   fill("red");
   textSize(50);
   stroke("blue");
   text("GameOver",175,300)
   fill("blue");
   textSize(35);
   text("Press 'R' to restart the game.\nOr Press the  aqua box to \n"+"              "+"Restart",75,400)

  }
   drawSprites();
}

function fruits(){
  if(frameCount%80  ===0){
    
    fruit=createSprite(600,200,20,20);
    fruit.velocityX=-6;
    fruit.addImage("image",bananaImage);
    fruit.scale=0.2;
    fruit.lifetime=100;
    
    FoodGroup.add(fruit);
    
  }
}

function obstacles(){
  
  if(frameCount%65===0){
    obstacle=createSprite(600,390,20,20);
    obstacle.addImage("hi",obstaceImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-7;
    obstacle.lifetime=100; 
    
    obstacleGroup.add(obstacle);
    
  }
}
function reset(){
  sc=0;
  monkey.y=390
}



