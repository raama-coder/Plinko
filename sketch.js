const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var counter = 0
var ground, side1, side2, top

function setup() {
  createCanvas(750,900);
  engine = Engine.create();
  world = engine.world;
  createPlinkos();
  particle = new Ball(50, 50,"black",true);
  createParticles();
  createDivisions();
  ground = new Ground(375, 900, 750, 20)
  side1 = new Ground(750, 450, 10, 900)
  side2 = new Ground(0, 450, 10, 900)
  Engine.run(engine);
}

function draw() {
  background("black");

  displayArrayValue(plinkos) ;

  particle.display();
  displayParticlesArray(particles);

  displayArrayValue(divisions) ;

  ground.display();
  side1.display();
  side2.display();
  
  drawSprites();
}

// Creating plinkos
function createPlinkos(){
  var columns = width/30;
  var rows = height*0.4/30;
  var arAdd = 0;
  var xPos = 25;
  var yPos = 100;
  for (i=1; i<=rows; i++){
    for (j=1; j<=columns; j++){
      plinkos [arAdd++] = new Ball (xPos,yPos,"white",true);
      xPos = xPos+33;
    }
    if (i%2===0){
      xPos = 20;
    }else{
      xPos=35
    }
    yPos = yPos+30;
  }
}

// Creating particles
function createParticles(){
  var colArr = ["red", "orange", "yellow", "green", "blue", "purple"]
  var yPos = 60
  var totParticles = 200
  for (i=0; i<=totParticles; i++){
    var col = random(colArr);
    var xPos = random(50, 650)
    particles [i] = new Ball (xPos ,yPos, col, true)
  }
}

// Creating divisions
function createDivisions(){
  var yPos = 750;
  var h = 300;
  var w =10;
  for (i=0; i<=width; i+=75){
  divisions.push(new Division(i,yPos,w,h));
  }
}

function displayArrayValue(ar){
  for (i=0;i<ar.length;i++){
    ar[i].display();
  }
}

function displayParticlesArray(ar){
  for (i=0;i<counter;i++){
    ar[i].display();
  }
}

// Realeasing particles one by one
function keyPressed (){
    if (keyCode === 32){
        if (counter<particles.length){
          particle = particles[counter];
          Body.setStatic(particle.body, false);
        }
        counter++;
  }
}