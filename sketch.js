var dots = [];

var value = 0;  //starting value of earthquake

var button1;
var button2;
var button3;
var myImage;
var myResults;

function preload() {
    myResult = loadImage("images/prova1.png");
    myImage = loadImage("images/prova2.jpg");
}
    
function setup(){
     createCanvas(windowWidth, windowHeight);
}


function draw(){
     background(204);
     angleMode(DEGREES);
    
     textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.1);    
    
    var magnitude = int(map(value, 0, 10000, 0, 10));
    
    if (value > 0){
        
        //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value * 2; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);

    //magnitude indication
    fill(0);
    noStroke();    
    
    textSize(height/40);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
        
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text(magnitude,width/2, height - height/6.7);
    
    textSize(height/50);
    textAlign(CENTER);
    textStyle(NORMAL);    
    text(value, width/2, height - height/8);
        
         //buttons  
          
    button1 = createButton("See results");
    button1.position(width/2,(height/10)*9);
    button1.mouseIsPressed(results);
        
    button2 = createButton("Try again");
    button2.position(width/2, (height/10)*9.5);
    button2.mouseIsPressed(clearEverything);
    
    button3 = createButton('imagens');
    button3.position(width/3,height/3);
    button3.mouseIsPressed(imagens);    
        
 
      
   
    //draw dots and given methods (actions)
      noStroke();
      fill(0);
      for (var i = 0; i < value*10; i++){
        dots[i].move();
        dots[i]. display();
      }
          

 
}
}

function deviceShaken(){
    
    value = (pAccelerationX * pAccelerationY * pAccelerationZ)/10; 
   
    //create objects
    for (var i = 0; i < value*10; i++){
        dots.push(new QuakeDots());
    } 
    
}


function QuakeDots(){
  
    var a = random(0,360);
    var b = random(0,value);//r = value = 30
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 4;
    this.speed = 2; //magnitude
    
    this.move = function(){
      this.xdot += random(-this.speed,this.speed);
      this.ydot += random(-this.speed,this.speed);
    }
    this.display = function(){
      ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
    };
    
    
    // result buttons
      function results() {
     image(myImage,0,0,windowWidth,windowHeight);
    }

    function clearEverything() {
     background(237, 37, 154);
     }

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
     }
}

