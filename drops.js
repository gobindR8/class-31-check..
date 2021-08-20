class drops{
constructor(x,y,r){
var options={
  isStatic:false,
   restitution:0.1,
   desnity:1,
   friction:1,
   

} 
this.x=x
this.y=y
this.r=r
this.dropes=[]
this.drop=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.drop)

}
display(){
var pos=this.drop.position
var angle=this.drop.angle
var maxDrops=100
push()
translate(pos.x,pos.y)
rotate(angle)
strokeWeight(4)
fill(100,0,255)
rectMode(CENTER)
ellipse(0,0,this.r,this.r)
pop()


for (var i=0; i<maxDrops; i++){
this.dropes.push(new createDrops(random(0,400),random(0,400)))



}

if (this.droplets.position.y>height){
  Matter.Body.setPosition(this.droplet,{x:random(0,400),y:random(0,400)})
  
  
  
  }



}








}
