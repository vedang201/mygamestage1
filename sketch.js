var game;
var gameMode=0;
var userInput;
var monster,player,sword;
var monsterImage;
var visible = 255;
var database;
var swordImage;
function preload(){
 monsterImage = loadImage("angerimage.png");
 swordImage = loadImage("swordimage.png");
}

function setup() {
  createCanvas(800,800);
 database = firebase.database();
 game = new Game();
 game.getMode();
 userInput = new Form();



}

function draw() {
  background("brown");  
  if(gameMode==0){
    userInput.display();
  }
  
  if(gameMode==1){
   
   game.angerMode();

   
  }
  if(gameMode==2){

  }
  drawSprites();



}