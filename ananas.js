class Ananas {

  constructor() {
    this.xS = height/20;
    this.yS = this.xS*2;

    this.uncS = this.xS*2;
    this.crS = this.uncS/2;
    this.uncrouched = horizon-this.yS;
    this.crouched = this.uncrouched + this.uncS/2;

    this.x = width/8;
    this.y = this.uncrouched;

    this.gravity = height/857;  // compared to width
    this.velocity = 0;
    this.jumped = true;
    this.dJumped = true;
  }

  show() {
    fill(255);
    stroke(0);
    rect(this.x, this.y, this.xS, this.yS);
  }

  up() { // -6 relative to 600 (maybe a bit more)
    // this.velocity = -(Math.sqrt(height/16.7));
    this.velocity = -Math.sqrt(height)/4.08;
  }

  down() {
     this.y = this.crouched;
     this.yS = this.crS;
  }

  undown() {
    if(this.y > this.uncrouched) {
      this.y = this.uncrouched;
    }
    this.yS = this.uncS;
  }

  update() {
    if(this.y == this.uncrouched) {
      this.jumped = false;
      this.dJumped = false;
    }

    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y+this.yS > horizon) {
      this.y = horizon-this.yS;
      this.velocity = 0;
    }
  }
}
