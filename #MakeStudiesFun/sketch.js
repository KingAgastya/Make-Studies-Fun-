var robot, cloud, startButton;
var startImg, cloudImg, robotImg;
var game;
var gameState = "Start";
var hours, mins, secs

function preload(){
  robotImg = loadImage("images/Robot.png");
  cloudImg = loadImage("images/speech_bubble.jpg");
  startImg = loadImage("images/Play.png")
}

function setup(){

  createCanvas(1200, 600)
  // game = new Game(600, 300, 20, 20)
  robot = createSprite(600, 400, 20, 20);
  cloud = createSprite(400, 200, 20, 20);
  startButton = createSprite(600, 450, 20, 20);

  robot.addImage(robotImg)
  cloud.addImage(cloudImg)
  startButton.addImage(startImg)

  gameState = "Start"

  robot.scale = 0.5;
  cloud.scale = 0.25;
  startButton.scale = 0.25;

  hours = 0
  mins = 0
  secs = 0
}

function draw() {
  background("cyan");

  if (gameState === "form"){
    create.display()
  }

  //game.display()
  
  drawSprites();
}