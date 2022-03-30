var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  

  console.log("if you see this, just letting you know i rewrote some of the code to fix some bugs.");
  console.log("The bugs include holding space to spawn a new arrow every frame and shooting one balloon causes every arrow on screen to be destroyed")
}

function draw() {
 background(0);
  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {


    // for loop goes through every arrow and red balloon combination
    // and checks if they are touching
    // then destroys only the arrow and balloon that are touching each other

    for(var i=0; i<arrowGroup.length; i++) {
      for(var j=0; j<redB.length; i++) {
        if (arrowGroup[i].isTouching(redB[j])) {
          arrowGroup[i].destroy();
          redB[j].destroy();
        }
      }
    }
    /*   
    redB.destroyEach(); <-- THIS ONE WAS THE ANSWER
    //redB.destroy();
    //redB.Each();
    //ballon.destroyEach();
    
    arrowGroup.destroyEach();
    */
    score=score+1;

  }

  if (arrowGroup.isTouching(greenB)) {
    for(var i=0; i<arrowGroup.length; i++) {
      for(var j=0; j<greenB.length; i++) {
        if (arrowGroup[i].isTouching(greenB[j])) {
          arrowGroup[i].destroy();
          greenB[j].destroy();
        }
      }
    }
    // greenB.destroyEach();
    // arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    for(var i=0; i<arrowGroup.length; i++) {
      for(var j=0; j<blueB.length; i++) {
        if (arrowGroup[i].isTouching(blueB[j])) {
          arrowGroup[i].destroy();
          blueB[j].destroy();
        }
      }
    }
    // blueB.destroyEach();
    // arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    for(var i=0; i<arrowGroup.length; i++) {
      for(var j=0; j<pinkB.length; i++) {
        if (arrowGroup[i].isTouching(pinkB[j])) {
          arrowGroup[i].destroy();
          pinkB[j].destroy();
        }
      }
    }
    // pinkB.destroyEach();
    // arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 200;
  arrow.scale = 0.3;
  
  //arrowGroup.addGroup(arrow);
  //arrow.add(arrowGroup);
  //arrowGroup.add();
  arrowGroup.add(arrow);
   
}
