var fixedObject,movingObject;
var cube1,cube2;


function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 100);
  fixedObject.shapeColor="green";
  movingObject = createSprite(200,200,50,100);
  movingObject.shapeColor="green";
  cube1 = createSprite(400,100,50,50);
}

function draw() {
  background(0); 
  fixedObject.debug=true;
  movingObject.debug=true; 
  movingObject.x=mouseX;
  movingObject.y=mouseY;
  console.log(fixedObject.x-movingObject.x);

  isTouching();

  drawSprites();
}

function isTouching(){

  if(movingObject.x-fixedObject.x<=fixedObject.width/2+movingObject.width/2
    &&fixedObject.x-movingObject.x<=movingObject.width/2+fixedObject.width/2
    &&movingObject.y-fixedObject.y<=movingObject.height/2+fixedObject.height/2
    &&fixedObject.y-movingObject.y<=fixedObject.height/2+movingObject.height/2){
    movingObject.shapeColor="red";
    fixedObject.shapeColor="red";
  }
  else{
    movingObject.shapeColor="green";
    fixedObject.shapeColor="green";
  }

}

function bounce(){


}