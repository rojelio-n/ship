var sea, ship, seaImage, shipImage

function preload(){
shipImage=loadAnimation('ship1.png','ship2.png')
seaImage=loadImage('sea.png')
}

function setup(){
  createCanvas(400,400)
  //background('blue')
  sea=createSprite(400,200)
  sea.addImage(seaImage)
  sea.velocityX=-4
  sea.scale=.3
  ship=createSprite(100,200)
  ship.addAnimation('moving ship',shipImage)
  ship.scale=.2
}

function draw() {
  background('blue');
if(sea.x<0){
  sea.x=400
}
    
  drawSprites();
  
}