var fixedrectangle,movingrectangle

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(400,100,20,20);
  movingrectangle.shapeColor="black";
  fixedrectangle.shapeColor="black";

rect1=createSprite(200,300,50,50);
rect2=createSprite(300,300,50,50);
rect3=createSprite(400,300,50,50);
rect4=createSprite(500,300,50,50);


rect1.shapeColor="black";

rect2.shapeColor="black";

rect3.shapeColor="black";

rect4.shapeColor="black";

}

function draw() {
  background(0,255,255);
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
if (collision(movingrectangle,rect1)){
   rect1.destroy();
}
if (collision(movingrectangle,rect2)){
  rect2.shapeColor=("yellow");
}
if (collision(movingrectangle,rect3)){
  rect3.shapeColor=("green");
}
if (collision(movingrectangle,rect4)){
  rect4.destroy();
}

drawSprites();

}
 
 
 


  




