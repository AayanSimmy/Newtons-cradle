
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof
var ball1
var ball2
var ball3
var ball4
var ball5
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    roof=new Ground(300,150,600,50)
	ball1=new Bob(100,500,50)
	ball2=new Bob(200,500,50)
	ball3=new Bob(300,500,50)
	ball4=new Bob(400,500,50)
	ball5=new Bob(500,500,50)
	rope1=new Rope(ball1.body,roof.body,-200,0)
	rope2=new Rope(ball2.body,roof.body,-100,0)
	rope3=new Rope(ball3.body,roof.body,0,0)
	rope4=new Rope(ball4.body,roof.body,100,0)
	rope5=new Rope(ball5.body,roof.body,200,0)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  roof.display()
  ball1.display()
  console.log(ball1.body.position)
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	console.log(keyCode)
	if(keyCode===32){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:+500,y:-500})
		console.log("hi")
	}
}



