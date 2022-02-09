var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game, gameState;
var cars = [];
var playerCount;
var car1_img, car2_img, track_img;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img= loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track_img = loadImage("./assets/track.jpeg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if (gameState === 1 ){
    game.play();
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
