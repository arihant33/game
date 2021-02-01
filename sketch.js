const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundimage

function preload() {
//preload the images here
backgroundimage = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(900, 800);
  // create sprites here
engine=Engine.create();
world=engine.world;
ground= new Ground(200,400,600,3);
attach=new Throw (superhero.body,{x:100,y:100})
superhero= new Superhero(400,3,100,100)
block1=new block(290,350,30,40)
block2=new block(310,350,30,40)
block3=new block(340,350,30,40)
block4=new block(370,350,30,40)
block5=new block(400,350,30,40)
block6=new block(430,350,30,40)
block7=new block(460,350,30,40)
block8=new block(490,350,30,40)
block9=new block(310,315,30,40)
block10=new block(340,315,30,40)
block11=new block(370,315,30,40)
block12=new block(400,315,30,40)
block13=new block(430,315,30,40)
block14=new block(460,315,30,40)
monster=new Monster(380,200,100,100)


Engine.run(engine);

}

function draw() {
  background(0);
  display()
superhero.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
monster.display()
ground.display()


}

