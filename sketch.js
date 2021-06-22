const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var f1,f2,f3,f4,f5;
var f6,f7,f8,f9,f10;
var chain;
var ball;

function preload() {
  //  getBackgroundImg();
    //fly_sound = loadSound("sounds ab/flying.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    f1 = new Building(700, 350, 50, 60);
    f2 = new Building(700, 330, 50, 50);
    f3 = new Building(700, 310, 50, 40);
    f4 = new Building(700, 290, 50, 30);
    f5 = new Building(700, 270, 50, 20);

    f6 = new Building(600, 350, 50, 20);
    f7 = new Building(600, 330, 50, 30);
    f8 = new Building(600, 310, 50, 40);
    f9 = new Building(600, 290, 50, 50);
    f10 = new Building(600, 270, 50, 60);
    ball = new Ball(350, 350, 30);



    chain = new Chain(ball.body,{x:300, y:200});
}

function draw(){
 //   if(backgroundImg)
        background("lightblue");
    
    Engine.update(engine);
    ground.display()
    fill ("lightgreen");
    f1.display()
    fill ("lightpink");
    f2.display()
    fill ("blue");
    f3.display() 
    fill ("violet");
    f4.display()
    fill ("red");
    f5.display()

    fill ("lightgreen");
    f6.display()
    fill ("lightpink");
    f7.display()
    fill ("blue");
    f8.display() 
    fill ("violet");
    f9.display()
    fill ("red");
    f10.display()
    ball.display();
    chain.display();    
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}