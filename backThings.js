class BackThings {

  constructor() {
    // this.y = horizon - random(anaSize/20, anaSize/10);
    // this.x = width;
    //
    // this.yS = horizon - this.y;
    // this.xS = this.yS + random(this.yS);
    this.yS = random(anaSize/20, anaSize/10);
    this.xS = this.yS + random(this.yS);

    this.x = width;
    let chance = Math.round(random(1, 2));
    if(chance == 1) {
      this.y = horizon - this.yS;
    } else {
      this.y = random(horizon, height-this.yS);
    }
  }

  show() {
    fill(0);
    noStroke();
    rect(this.x, this.y, this.xS, this.yS);
  }

  update(speed) {
    this.x -= speed;
  }

}
