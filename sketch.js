const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,log1,ground;
var box3, box4, log2, pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(595,375,50,50);
    box2 = new Box(660,375,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(625,375);
    log1 = new log(625,350,150,PI/2);
    box3 = new Box(595,475,50,50);
    box4 = new Box(360,475,50,50);
    pig2 = new pig(125,475);
    log2 = new log(425,550,150,PI/2); 
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    
}