class Cloud {

  constructor() {
    this.xS = random(width/50, width/10);
    // this.yS = random(height/50, height/20);
    this.yS = this.xS / 2;

    this.x = width;
    this.y = random(-this.yS/2, height/2.2-this.yS);

    // this.speed = random(width/100, width/40);
    this.speed = map(this.xS, width/50, width/20, width/40, width/60);
  }

  show() {
    fill(255);
    stroke(1);
    rect(this.x, this.y, this.xS, this.yS);
  }

  update() {
    this.x -= this.speed;
  }

}
