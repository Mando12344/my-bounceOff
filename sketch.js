var fixedRect, movingRect,box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(100,400,20,40);
  box1.shapeColor="blue";
  box1.debug=true;
  box2=createSprite(500,400,20,40);
  box2.shapeColor="red";
  box2.debug=true;
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  box1.velocityX = 5
  box2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounce(box1,box2);


  drawSprites();
}
