class Banana {

  constructor() {
    this.yS = random(anaSize/2.5, anaSize/1.2);
    this.xS = this.yS/2;

    this.x = width;
    this.y = horizon - this.yS;
  }

  show() {
    fill(255);
    stroke(1);
    rect(this.x, this.y, this.xS, this.yS);
  }

  update(speed) {
    this.x -= speed;
  }

  hits(ananas) {
    if(ananas.x+ananas.xS > this.x && ananas.x < this.x+this.xS) {
      if(ananas.y+ananas.uncS > this.y) {
        return true;
      }
    }
    return false;
  }

}
