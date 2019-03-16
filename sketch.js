let ananas, clouds, enemies, horizon, enemyTypes, maxApplePos, anaSize;
let counter, isCo, backThings, movingSpeed;
let mUp, mDown;
let gameOn;

function preload() {

}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 600);
  horizon = height/1.4;
  counter = 0;
  isCo = false;

  ananas = new Ananas();
  clouds = [];
  enemies = [];
  backThings = [];

  maxApplePos = ananas.y;
  maxCr = ananas.crouched;
  anaSize = ananas.uncS;

  movingSpeed = anaSize/8.57; // map to width ???

  mUp, mDown, gameOn = false;
}

function draw() {
  if(gameOn) {
    if(isCo) {
      counter++;
    }
    if(counter == 1) { //width?
      // noLoop();
      gameOn = false;
      enemies = [];
    }

    background(230);

    if(frameCount % 30 == 0) {
      clouds.push(new Cloud());
    }
    for(i = clouds.length-1; i > -1; i--) {
      let cl = clouds[i];

      cl.show();
      cl.update();

      if(cl.x+cl.xS < 0) {
        clouds.splice(i, 1);
      }
    }

    if(frameCount % 50 == 0) { // think about it
      let randEn = Math.round(random(1, 2));
      if(randEn == 1) {
        enemies.push(new Banana());
      } else if (randEn == 2) {
        enemies.push(new Apple());
      }
    }

    for(i = enemies.length-1; i > -1; i--) {
      let en = enemies[i];

      en.show();
      en.update(movingSpeed);

      if(en.hits(ananas)) {
        isCo = true;
      }

      if(en.x+en.xS < 0) {
        enemies.splice(i, 1);
      }
    }

    drawBack();
    for(i = backThings.length-1; i > -1; i--) {
      backThings[i].show();
      backThings[i].update(movingSpeed);

      if(backThings[i].x + backThings[i].xS < 0) {
        backThings.splice(i, 1);
      }
    }

    ananas.show();
    ananas.update();

    if(keyIsDown(DOWN_ARROW) || mDown) {
      if(ananas.y == ananas.uncrouched) {
        ananas.down();
      }
    } else {
      ananas.undown();
    }

    if(keyIsDown(UP_ARROW) || mUp) {
      if(!ananas.dJumped) {
        ananas.up();
      }
      if(ananas.y < ananas.uncrouched) {
        ananas.jumped = true;
      }
      if(ananas.jumped == true && ananas.y < height/1.88) {
        ananas.dJumped = true;
      }
    } else {
      if(ananas.y < ananas.uncrouched) {
        ananas.dJumped = true;
      }
    }
  } else {
    noLoop();
    background(0);
  }
}

function mousePressed() {
  if(gameOn) {
    if(mouseY <= height/2) {
      mUp = true;
    }
    if(mouseY > height/2) {
      mDown = true;
    }
  } else {
    gameOn = true;
    isCo = false;
    counter = 0;
    loop();
  }
}

function mouseReleased() {
  mUp = false;
  mDown = false;
}

function drawBack() {
  fill(0);
  noStroke();
  rect(0, horizon, width, height/100);
  let max = 30;
  let a = Math.round(random(0, max));
  if(a == max) {
    backThings.push(new BackThings());
    print(1);
  }
}
