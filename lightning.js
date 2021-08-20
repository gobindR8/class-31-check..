class lightning{
    constructor(x,y,width,height){
        this.rand=random
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        this.thunder1=loadImage("1.png")
        this.thunder2=loadImage("2.png")
        this.thunder3=loadImage("3.png")
        this.thunder4=loadImage("4.png")
        this.body1=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body2=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body3=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.body4=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})



    }
     display(){
        
        var posbody1=this.body1.position
        var angle1=this.body1.angle
        var posbody2=this.body2.position
        var angle2=this.body2.angle
        push()
        translate(posbody1.x,posbody1.y,posbody1.width,posbody1.height)
       rotate(angle1)
       imageMode(CENTER)
       image(this.thunder1,0,0,0,0)
      pop()
     
      push()
      translate(posbody2.x,posbody2.y,posbody2.width,posbody2.height)
     rotate(angle2)
     imageMode(CENTER)
     image(this.thunder2,0,0,0,0)
        pop()




    this.rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder= createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
         case 1: thunder.addImage(this.thunder1)
         break;
         case 2: thunder.addImage(this.thunder2)
          break;
        default: break

        }
         thunder.scale=random(0.01,0.02)
    }
    }


    
}