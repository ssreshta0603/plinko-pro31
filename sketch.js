
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divison=[];
var divisonHeight = 300;
var particle =[];
var plinkos =[];
var ground1,ground2,ground3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for (var i = 40; i <=width; i=i+90) 
    {
    
       plinkos.push(new plinko(i,150));
    }
	for (var i = 15; i <=width; i=i+70) 
    {
    
       plinkos.push(new plinko(i,300));
	}
	for (var i = 40; i <=width; i=i+90) 
    {
    
       plinkos.push(new plinko(i,450));
  }
	for (var i = 15; i <=width; i=i+70) 
    {
    
       plinkos.push(new plinko(i,600));
	}
	
  ground1 = new Ground(400,1195,800,10);
 ground2 = new Ground(5,600,10,1200);
  ground3 = new Ground(795,600,10,1200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // Engine.update(engine);
  background(0);

  if(frameCount%60===0){
    particle.push(new Particle(random(400,200), 10,10));
   
  }

 for (var j = 0; j < particle.length; j++) {
  
    particle[j].display();
  }

  for(var k =0; k <=width;k=k+80){
	divison.push(new Divison(k,height - divisonHeight/2,10,divisonHeight));
  }
  for (var k = 0; k < divison.length; k++) {
  
	divison[k].display();
  }
  

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  ground1.display();
  ground2.display();
  ground3.display();

};



