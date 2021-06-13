const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var  engine, world, ball,ball,ground
function setup() {
  createCanvas(400,400);
  
engine = Engine.create()
  world= engine.world
  var Ball = {
    restitution:1.4
  }
ball = Bodies.circle(200,100,20, Ball)
World.add(world,ball)
console.log(ball)
var groundMine = {
  isStatic:true
}
ground = Bodies.rectangle(200,380,400, 20, groundMine)
World.add(world,ground)
}


function draw() {
  background(0);  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20 )
rectMode(CENTER)
rect(ground.position.x, ground.position.y, 400, 20)

}