var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 675, 800, 50);
	World.add(world, ground);

	side1 = new Dustbin(600, 645, 190, 15);
	World.add(world, side1);

	side2 = new Dustbin(700, 595, 15, 100);
	World.add(world, side2);

	side3 = new Dustbin(500, 595, 15, 100);
	World.add(world, side3);

	paper = new Paper(200, 450, 25);
	World.add(world, paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  side1.display();
  side2.display();
  side3.display();

  paper.display();

  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y:-85});
  }

}

