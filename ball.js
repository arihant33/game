class Ball{
    constructor(x,y,width,length){
    var options={
        isStatic=flase
        
        
    }
    this.body= bodies.rectangle(x,y,width,height)
    this.width= width
    this.heigth= height
    
    world.add(word,this.body)

    }

   display(){
  
push()

imageMode(center)
image(this.image,0,0,this.width,this.height)
pop()

   } 
}