// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 


var myEngine, myWorld;

var myGround;

var myBall;

function setup() {
  createCanvas(600,600);

  // 1. Create and engine
  myEngine = Engine.create();
  // 2. Create world using engine
  myWorld = myEngine.world;

  // JSON - JavaScript Object Notation
  var ground_options = {
    isStatic: true,
  }

  var ball_options = {
    restitution: 0.7,
  }
  

  // 3. Create bodies
  myGround = Bodies.rectangle(300, 580, 600, 20, ground_options);
  myBall = Bodies.circle(300,20,20, ball_options);

  // 4. Add to world
  World.add(myWorld, myGround);
  World.add(myWorld, myBall);

  
}

function draw() {
  background(0);  

  // 5. Update the engine
  Engine.update(myEngine);

  console.log(myGround.position.x, myGround.position.y);

  // 6. Display the body
  rectMode(CENTER);
  rect(myGround.position.x, myGround.position.y, 600, 20);

  ellipseMode(RADIUS);
  ellipse(myBall.position.x, myBall.position.y,20,20);
  
}