var ball;
var box1;
var box2;
var box3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:true
	  }
	
	  ground = Bodies.rectangle(350, 600, 700, 10, options);
	  World.add(world, ground);
	
	  var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	  }
	  ball=Bodies.circle(200,150,25,ball_options);
	  World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.shapeColor("Yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  
  
  drawSprites();
 
}



