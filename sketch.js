var bowImg,boardImg;
var bow,board;
var bg;
var canvas,edges;
var arrow,arrowImg,arrowGroup;
var ob1Img,ob2Img,ob3Img,ob4Img;
var ob1,ob2,ob3,ob4;
var obGroup;
var boom,boomImg;

function preload() {
 //bg = loadImage("ground-removebg-preview.png");
 bgImg =  loadImage("bg.png");
 bowImg = loadImage("both.png");
 boardImg = loadImage("board.png");
 arrowImg = loadImage("a2.png");
 ob1Img = loadImage("ob1.png");
 ob2Img = loadImage("ob2.png");
 ob3Img = loadImage("ob3.png");
 ob4Img = loadImage("ob4.png");
 //boomImg = loadImage("boom.png");
}

function setup() {
  //createCanvas(1000,500);
  canvas = createCanvas(displayWidth-20,displayHeight-100);
 // 2000,2000

  board = createSprite(700,150);
  board.addImage("board",boardImg);
  board.scale=0.5;

  bow = createSprite(700,650);
  bow.addImage("bow",bowImg);
  bow.scale=0.5;

  score = 0;

  //arrow = createSprite(700,650);
  //arrow.addImage("arrow",arrowImg);
  //arrow.scale=0.5;
  
  arrowGroup = new Group(); 
  ob1Group = new Group(); 
  ob2Group = new Group(); 
  ob3Group = new Group(); 
  ob4Group = new Group(); 

  edges=createEdgeSprites();
}

function draw() {
  background(bgImg);

 
  if(keyDown("space")){
    createArrow();
  }

  if(arrowGroup.isTouching(ob1Group)){
    ob1Group.destroyEach();
    arrowGroup.destroyEach();
    score= score-1;
    //ob1Group.changeImage("boom",boomImg);
  }

  if(arrowGroup.isTouching(ob2Group)){
    ob2Group.destroyEach();
    arrowGroup.destroyEach();
    score= score-1;
    //ob2Group.changeImage("boom",boomImg);
  }

  if(arrowGroup.isTouching(ob3Group)){
    ob3Group.destroyEach();
    arrowGroup.destroyEach();
    score= score-1;
    //ob3Group.changeImage("boom",boomImg);
  }
  
  if(arrowGroup.isTouching(ob4Group)){
    ob4Group.destroyEach();
    arrowGroup.destroyEach();
    score= score-1;
   // ob4Group.changeImage("boom",boomImg);
  }

 
 
  var select_obstacle = Math.round(random(1,4));
  
  if (World.frameCount % 80 == 0) {
    if (select_obstacle == 1) {
      obstacle1();
    } else if (select_obstacle == 2) {
      obstacle2();
    } else if (select_obstacle == 3) {
      obstacle3();
    } else {
      obstacle4();
    }
  }
    
  if(arrowGroup.isTouching(board)){
    //arrowGroup.velocityYEach=0;
    arrowGroup.setVelocityYEach(0); 
    arrowGroup.destroyEach();
    score=score+1;
  }
 


  fill("red");
  textSize(30);
  text("SCORE: "+score,1300,100);
  drawSprites();
}

function obstacle1() {
  var ob1 = createSprite(0,Math.round(random(400, 500)), 10, 10);
  ob1.addImage(ob1Img);
  ob1.velocityX = 5;
  ob1.lifetime = 500;
  ob1.scale = 0.1;
  ob1Group.add(ob1); 
}

function obstacle2() {
  var ob2 = createSprite(0,Math.round(random(400,500)), 10, 10);
  ob2.addImage(ob2Img);
  ob2.velocityX = 5;
  ob2.lifetime = 500;
  ob2.scale = 0.1;
  ob2Group.add(ob2);
}

function obstacle3() {
  var ob3 = createSprite(0,Math.round(random(400,500)), 10, 10);
  ob3.addImage(ob3Img);
  ob3.velocityX = 5;
  ob3.lifetime = 500;
  ob3.scale = 0.1;
  ob3Group.add(ob3);
}

function obstacle4() {
  var ob4 = createSprite(0,Math.round(random(400,500)), 10, 10);
  ob4.addImage(ob4Img);
  ob4.velocityX = 5;
  ob4.lifetime = 500;
  ob4.scale = 0.1;
  ob4Group.add(ob4);
}


function createArrow() {
  var arrow= createSprite(700,650);
  arrow.addImage("arrow",arrowImg);
  arrow.velocityY=-6;
  //arrow.lifetime = 100;
  arrow.scale = 0.5;
  arrowGroup.add(arrow) ;
  // arrow.setCollider("circle",10,5,5);
  //arrow.debug = true
}
