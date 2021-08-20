class walker{
    constructor(x,y,width,height){
     
     this.x=x
     this.y=y
     this.width=width
     this.height=height
     this.animation=loadAnimation("walking_1.png","walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png")
        this.body=Bodies.rectangle(this.x,this.y,this.width,this,height,{isStatic:true})
World.add(world,this.body)
    }
    display(){
        var posbody=this.body.position
        var angle=this.body.angle
        push()
        translate(posbody.x,posbody.y)
        rotate(angle)
        imageMode(CENTER)
        animation(this.animation,300,100,this.body.position.width,this.body.position.height)
     pop()



    }

}