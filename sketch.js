// var mic
function setup() {
  createCanvas(windowWidth, windowHeight);

  // mic=new p5.AudioIn();
  // mic.start();

}

  // let x=width/2
  // let y=height/2
function draw() {
  background(220);

  strokeWeight(5)
  line(0,height*3/4,width,height*3/4)
  var xx
  xx += movedX
  circle(xx,height*7/8,100)

  textSize(40)
  text("x:"+mouseX+"  y:"+mouseY ,50,50)
  // for(var i=0;i<6;i++){
  // let micLevel=mic.getLevel();
  // console.log(micLevel) 
  push()
    translate(width/2,height*1/4)
    fill(250,40,170)
    ellipse(0,0,300)
    fill(88,79,190)
    ellipse(0,0,100,50)
    fill(44,91,250)
    ellipse(-25,0,20)
    ellipse(25,0,20)

    ellipse(-75,-100,60)
    ellipse(75,-100,60)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    
  

    if(mouseIsPressed){
      xx=xx+100
      fill(145,130,255)
      arc(0,75,200,800,0,PI)
    }
    else{
      fill(79,120,78)
      arc(0,75,200,75,0,PI)
    }
    // arc(0,75,200,75+micLevel*1000,0,180)
    fill(87,45,145)
    arc(0,74,200,50,0,PI)
    pop()

    circle(map(mouseX,windowWidth*1/3,windowWidth*2/3,0,windowWidth),height*7/8,100)
    
  // push()
  // pop()
  // }


}


