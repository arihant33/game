class Superhero{
    constructor(x,y,width,length){
    var options={
        isStatic=flase
        
        
    }
    this.body= bodies.rectangle(x,y,width,height)
    this.width= width
    this.heigth= height
    this.image= loadImage("Image/Superhero-02.png")
    world.add(word,this.body)

    }

   display(){
var angles=this.body.angles
var pos=this .body.position
push()

imageMode(center)
image(this.image,0,0,this.width,this.height)
pop()

   } 
}