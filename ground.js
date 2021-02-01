class Ground{
constructor(x,y,width,length){
var options={
    isStatic=true
}
this.body=bodies.rectangle(x,y,width,height,options)
this.width= width;
this.height= height;
world.add(world,this.body)
}
display(){
var pos=this.body.position
rectMode(center);
fill(255)
rect(pos.x,pos.y,this.width,this.height)


}
    
}