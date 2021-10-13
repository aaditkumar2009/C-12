var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg,leaf,leafImg,readleaf;
var score = 0

function preload(){
  //loading the garden
  gardenImg = loadImage("garden.png");
  //loading the rabbit
  rabbitImg = loadImage("rabbit.png");
  //loading the apples
  appleImg= loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
  readleaf = loadImage("redImage.png")
}

function setup(){
  
  //creating the canvas
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
//text

  // calling edge sprites
  edges= createEdgeSprites();
  //making the rabbit collidewith the edges
  rabbit.collide(edges[0]);
  //making the rabbit move with the mouse  
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1,3))
 //calling the create apple function
 if(frameCount % 80==0) {
   if(select_sprites == 1){
    createApples(); 
   }
   else if(select_sprites == 2){
    createLeaf()
   }
   else{
   createredLeaf()
   }
 }
 
 
  drawSprites();
  
}


function createApples(){
  //making a conditonal statment to make a apple every 80 frames
  if(frameCount % 80 ===0  ){
apple = createSprite(random(10,400),40,10,10);
apple.addImage("appleyx",appleImg);
apple.velocityY = 3;
apple.scale = 0.055;
}
}
function createLeaf(){
  //making a conditonal statment to make a apple every 80 frames
  if(frameCount % 100 ===0  ){
leaf = createSprite(random(10,400),40,10,10)
leaf.addImage("appleyxyx",leafImg);
leaf.velocityY = 3
leaf.scale = 0.055
}
}
function createredLeaf(){
  //making a conditonal statment to make a apple every 80 frames
  if(frameCount % 120 ===0  ){
var redleaf = createSprite(random(10,400),40,10,10)
redleaf.addImage("appleyxyz",readleaf);
redleaf.velocityY = 3
redleaf.scale = 0.055
}
}