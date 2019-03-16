class Apple {

  constructor() {
    this.yS = random(anaSize/2.4, anaSize/1.6);
    this.xS = this.yS;

    this.x = width;
    this.y = random(maxApplePos - this.yS*1.4, maxCr - this.yS*1.1);
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
      if(ananas.y < this.y+this.yS) {
        return true;
      }
    }
    return false;
  }

}
