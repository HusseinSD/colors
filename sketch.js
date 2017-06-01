var  spot = {
  x: 20 ,
  y: 20
} ;

var col = {
  R: 255  ,
  G: 0  ,
  B: 0
};

var size = { widith: 2  ,  hight: 2  } ;

function setup() {
createCanvas(2000 , 1000 ) ;
background(255) ;}
function draw() {
spot.x  = random (0,800) ;
spot.y  = random (0,500) ;
col.R = random(0 , 255) ;
col.G = random(0 , 255) ;
col.B = random(0 , 255) ;

size.width   = random (0,100) ;
size.hight   = random (0,100) ;

noStroke() ;
fill(col.R ,col.G, col.B , 70 ) ;
ellipse(mouseX , mouseY  , size.width , size.width  ) ;

}

function mousePressed() {
   background(255);
}
