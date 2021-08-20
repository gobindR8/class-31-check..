const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const constraint=Matter.Constraint
var engine,world
var droplets
var walking
var lightning1
var ground1
function preload(){

}

function setup(){
    createCanvas(1200,800)
    engine=Engine.create()
    world=engine.world
    droplets=new drops(100,100,30)
     walking=new walker(300,100,10,10)
     lightning1= new lightning(500,100,10,10)
     ground1=new ground(400,500,1000,10)
   Engine.run(engine)
}



function draw(){
    background(0)
    droplets.display()
    walking.display()
    lightning1.display()
    ground1.display()

    
}   






