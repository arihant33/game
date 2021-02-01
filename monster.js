class Superhero{
    constructor(x,y,width,length){
    var options={
        isStatic=flase
        
        
    }
    this.body= bodies.rectangle(x,y,width,height)
    this.width= width
    this.heigth= height
    this.image= loadImage("Image/Monster-01.png")
    world.add(word,this.body)
}
display(){
   
    push()
    translate(this.body.x,this.body.y)
    imageMode(center)
    image(this.image,0,0,this.width,this.height)
    pop()
    
       } 
}