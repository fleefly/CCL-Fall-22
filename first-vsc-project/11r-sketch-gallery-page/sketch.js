let NUM_OF_PARTICLES = 75;
let particles = [];
let r, g, b;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas");

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(47, 144, 169);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.reappear();
    p.display();
  }

}

//

class Particle {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = -1; //random(-0.5, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.dia = 40;
  }
  // methods
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(105);

    ellipse(0, 0, this.dia, 15);
    triangle(30, -6, 10, 1, 30, 6);
    fill(50);
    circle(-8, 0, 2);

    pop();
  }
}