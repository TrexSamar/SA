
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enemy, enemy2, meteor, planet, spaceShip, star;  
var enemy_img, enemy2_img, meteor_img, planet_img, spaceShip_img, star_img

function preload()
{
//loading the images
enemy_img = loadImage("Game Images/Enemy.png")
enemy2_img = loadImage("Game Images/Enemy2.png")
meteor_img = loadImage("Game Images/Metor.png")
planet_img = loadImage("Game Images/Planet.png")
spaceShip_img = loadImage("Game Images/spaceShip.png")	
star_img = loadImage("Game Images/Star.png")	
}

function setup() {
	createCanvas(800, 700);

	enemy = createSprite(200, 300);
	enemy.addImage("enemy", enemy_img)
	enemy.scale = 0.1

	enemy2 = createSprite(50, 300);
	enemy2.addImage("enemy2", enemy2_img)
	enemy2.scale = 0.1

	meteor = createSprite(200, 200);
	meteor.addImage("meteor", meteor_img)
	meteor.scale = 0.1

	planet = createSprite(200, 400);
	planet.addImage("planet", planet_img)
	planet.scale = 0.1

	star = createSprite(400, 300);
	star.addImage("star", star_img)
	star.scale = 0.1

 	spaceShip = createSprite(320, 500);
	spaceShip.addImage("spaceShip", spaceShip_img)
	spaceShip = 0.001

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#00008b");
  
  drawSprites();
 
}



