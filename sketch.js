let startTime;
let diam = 10;
positions = new Array(10); 
function setup() {
  createCanvas(600, 400);
   startTime = millis();  
}

function draw() {
  background (204,240,250);

noStroke()
fill('#000000');
ellipse(width/2, height/2, diam, diam);
  diam += 1.8;
  diam %= width; 
  let elapsedTime = millis() - startTime; 
 if (elapsedTime > 1000) {
    fill(255, 0, 0);
  } else {
    fill(255, 255, 0);
  }
noStroke()
fill(102,204,102);
circle(480,380,380);
  
  
noStroke()
fill(204,255,153);
circle(350,305,280);
  


noStroke()
fill(255,255, 80);
circle(50, 50,100);

  noStroke()
fill(255,255, 80);
circle(100, 100,150);
noStroke()
fill(255,255, 80);
circle(20, 180,150);
  noStroke()
fill(255,255, 80);
circle(30, 70,150);
noStroke()
fill(255,255, 80);
circle(40, 150,150);
  
noStroke()
fill(255,255, 80);
circle(150,150,150);
noStroke()
fill(255,255, 80);
circle(0, 50,150);
  
noStroke()
fill(255,255, 80);
circle(0, 50,100);
noStroke()
fill(255,255, 80);
circle(100, 50,150);

noStroke()
fill(255,255, 80);
circle(150,100,150);
  
  

noStroke()
fill(255,255, 80);
circle(150,100,150);
  
  

  
  
noStroke()
fill(102,51,0);
rect(40,170,20,230);
  
noStroke()
fill(102,51,0);
quad(60,170,60,190,140,90,120,90);
  

noStroke()
fill(102,51,0);
quad(90,150,90,140,160,110,160,120);
  

noStroke()
fill(102,51,0);
quad(40,190,40,170,0,100,0,120);
  
  

noStroke()
fill(153,204,255);
quad(50,400,90,400,640,240,600,240);
  

noStroke()
fill(153,204,255);
quad(600,340,620,340,260,0,240,0);

noStroke()
fill(0,102,204);
quad(220,400,200,400,290,0,310,0);
  
for(let i = 0; i < 10; i += 1) {   
    positions[i] += int(random(-2, 2)); 
    positions[i] = constrain(positions[i], 0, width);
    line(positions[i], 0, positions[i], height);
  
let elapsedTime = millis() - startTime; 

  if (elapsedTime > 4000) { 
    background(random(255), 255, 255);  
  }   
}
}


function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}