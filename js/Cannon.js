class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/CANON.png");
    this.cannon_base = loadImage("assets/cannon_base.png");
  }
  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.95) {
      this.angle += 0.01;
      console.log(this.angle);
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
      this.angle -= 0.01;
      
    }

    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 40, 30, 240, 200, PI, TWO_PI);
    noFill();
  }
}
