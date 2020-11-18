var box1 , box2, box3;

function setup() {
  createCanvas(800,400);
  box1 = createSprite(0, 200, 65, 75);
  box1.shapeColor="green";
  box2 = createSprite(800, 200, 65, 85);
  box2.shapeColor="green";
  //box3 = createSprite(550, 200, 65, 85);
  //box3.shapeColor="green";
  box1.velocityX=3;
  box2.velocityX=-3;
  box1.debug = true;
  box2.debug = true;



  
}

function draw() {
  background(0);  
  fill("white");
  text (box1.x, 100,20);
  text (box2.x, 150,20);
  /*if(isTouching(box2,box3)){
    box3.shapeColor="red";
    box2.shapeColor="red";
  }
  else{
    box3.shapeColor="green";
    box2.shapeColor="green";
  
  }*/
  drawSprites();
  bounceOff(box1,box2)

}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x - obj1.x< obj1.width/2 + obj2.width/2
    && obj1.y-obj2.y<obj1.height/2+obj2.height/2
    &&obj2.y-obj1.y<obj2.height/2+obj1.height/2){
    
      return true;
  }
  else{
    return false;
  }
}
function bounceOff(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x - obj1.x< obj1.width/2 + obj2.width/2){
      obj1.velocityX=obj1.velocityX*-1;
      obj2.velocityX=obj2.velocityX*-1;
      
    }
    if( obj1.y-obj2.y<obj1.height/2+obj2.height/2
    &&obj2.y-obj1.y<obj2.height/2+obj1.height/2){
      obj1.velocityY=obj1.velocityY*-1;
      obj2.velocityY=obj2.velocityY*-1;
    }
}