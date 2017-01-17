var button1;
var button2;
var button3;
var myImage;
var myResults;

function preload() {
    myResult = loadImage("images/prova2.jpg");
}

function preload(){
    myImage = loadImage("images/prova1.png")
    
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  button1 = createButton("See results");
  button1.position(width/2,height/3);
  button1.mousePressed(results); //en vez de mousePressed para touch es touchStarted
    
  button2 = createButton("Try again");
  button2.position(width/2,height/2,3);
  button2.mousePressed(clearEverything); //agregar otro botono para las imagenes, definir las dimensiones...
    
  button3 = createButton("See images");
  button3.position(width/3,height/3);
  button3.mousePressed(images);
  background(50);
  noStroke();
}
function draw() {
}
function results() {
    image(myResult,0,0,windowWidth,windowHeight);
}
function images(){
    image(myImage,0,0,windowWidth,windowHeight);
}
function clearEverything() {
  background(50);
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}