const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgimg;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

 bgimg = loadImage("snow2.jpg")
 

}

function draw() {
  background("black");  

 // if (frameCount % 50 == 0 ) {
    var snow = new Snow(Math.round(random(200,600)),(Math.round(random(0,50))),10,10);
    snow.display();
 // }
  Engine.update(engine);

  
}