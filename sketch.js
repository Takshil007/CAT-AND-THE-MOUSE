var bgImg;
var cat;
//var mouse1,mouse2,mouse3,mouse4;



function preload() {
    //load the images here
//cat1=loadImage(cat1.png);
//cat2=loadImage(cat2.png);
//cat3=loadImage(cat3.png);
//cat4=loadImage(cat4.png);
bgImg= loadImage("garden.png");
cating1= loadAnimation("images/cat1.png");


}

function setup(){
  createCanvas(1000,800);
    //create tom and jerry sprites here
  //cat1 = createSprite(40,220,20,50);
  //cat1.addImage(cat1);
  //cat1.scale = 0.5;

}

function draw() {
  
    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
