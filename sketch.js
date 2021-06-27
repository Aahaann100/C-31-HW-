var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;




function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var o = 0; o <=240; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=320; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=400; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=480; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=560; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=640; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=720; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=800; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for(var l = 80; l <=width; l=l+50)
  {
    plinkos.push(new Plinko(l,275))
  }
  //create 4th row of plinko objects
  for(var m = 80; m <=width; m=m+50)
  {
    plinkos.push(new Plinko(m,375))
  }
 
  //create particle objects
  for(var o=80;o <=width; o=o+50){
  particles.push(new Particle(o,1))
  }
    
}
 


function draw() {
  background("cyan");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var o = 0; o < divisions.length; o++){
    divisions[o].display();
  }

  //display the paricles 
  for (var p=0;p < particles.length;p++){
    particles[p].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-100,width/2+400),10,10))
  }
}