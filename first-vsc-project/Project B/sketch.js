let seq = 0;
let p1 = "Do you know the story of Pandora?";
let p2 =
  "Pandora was the first woman on earth, crafted by the gods to be beautiful, intelligent, and curious. She was given a box by the gods, and told never to open it. However just like you, she opened the box.";
let pro1 = "Thy Godlike crime was to be ";
let prov1 = "kind,";
let prov2 = "curious,";
let prov3 = "ambitious,";
let prov4 = "wise,";
let pro2 = "To render with thy precepts less";
let pro3 = "The sum of human wretchedness,";
let pro4 = "And strengthen man with his own mind.";
let pro5 = "- An excerpt from Lord Byron's poem 'Prometheus.'"

function setup() {
  createCanvas(900, 700);
  background(0);
}

function draw() {
  background(0);

  // draw scenes
  if (seq == 0) {
    drawIntro();
  } else if (seq == 1) {
    drawScene1();
  } else if (seq == 2) {
    drawScene2();
  } else if (seq == 3) {
    drawScene3();
  } else if (seq == 4) {
    drawScene4();
  } else if (seq == 5) {
    drawScene5();
  } //else {
  //   drawEnding();
  // }
}

function mousePressed() {
  proceedSequence();
}

function proceedSequence() {
  seq++;
  if (seq == 6) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function drawIntro() {
  background(0);
  strokeWeight(15);
  stroke(53, 39, 29);
  fill(65, 44, 33);
  rect(150, 340, 600, 330);
  line(150, 450, 750, 450);
  noStroke();
  fill(96);
  rect(420, 420, 50, 70);
}

function drawScene1() {
  background(0);
  noStroke();
  fill(96);
  rect(420, 200, 50, 70);
  strokeWeight(15);
  stroke(53, 39, 29);
  fill(65, 44, 33);
  rect(150, 440, 600, 230);
  rect(150, 240, 600, 200);
  noStroke();
  fill(226, 198, 87, 150);
  rect(160, 420, 580, 15);

  //text
  textAlign(CENTER);
  textFont("Courier New");
  textSize(25);
  fill(225);
  text(p1, 140, 45, 635, 200);

  textFont("Courier New");

  textSize(16);
  fill(225);
  text(p2, 156, 295, 585, 150);
}

function drawScene2() {
  background(0);

  //eve apple
  stroke(53, 39, 29);
  strokeWeight(1);
  fill(199, 55, 47);
  ellipse(60, 250, 49, 50);
  strokeWeight(5);
  line(60, 215, 60, 230);
  noStroke();
  fill(0, 102, 0);
  ellipse(75, 220, 30, 15);
}

function drawScene3() {
  //babylon
  strokeWeight(2);
  stroke(28);
  fill(210, 180, 140);
  rect(30, 435, 60, 30);
  rect(35, 420, 50, 25);
  rect(40, 405, 40, 20);
  rect(45, 395, 30, 15);
  rect(50, 385, 20, 15);
  rect(55, 375, 10, 10);
}

function drawScene4() {
  //fire

  frameRate(5);
  fill(220, random(50, 140), 26);
  noStroke();
  //left
  triangle(36, 600, 56, 600, 46, 580);
  //right
  triangle(64, 600, 84, 600, 74, 575);
  //middle
  triangle(43, 600, 76, 600, 59, 560);

  //torch
  stroke(53, 39, 29);
  strokeWeight(3);
  fill(105, 75, 30);
  quad(51, 650, 69, 650, 73, 610, 47, 610);
  ellipse(60, 650, 32, 8);
  ellipse(60, 610, 32, 8);
  arc(60, 594, 50, 30, 0, HALF_PI * 2);
}

function drawScene5() {
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro1, 70, 150, 650, 200);
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(prov1, 352, 150, 790, 200);
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro2, 100, 200, 700, 200);
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro3, 100, 250, 700, 200);
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro4, 60, 300, 800, 200);
  
  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro5, 80, 350, 700, 200);
  

  
  // function keyTyped() {
  // if (key === 'a') {
  //     background(255);
  //     textFont("Courier New");
  //     textSize(35);
  //     fill(225);
  //     text(prov2, 362, 50, 790, 200);
  // } else if (key === 'b') {
  //     textFont("Courier New");
  //     textSize(35);
  //     fill(225);
  //     text(prov3, 362, 50, 790, 200);
  // }
  // // uncomment to prevent any default behavior
  // return false;
  // }
  
  // textFont("Courier New");
  // textSize(35);
  // fill(225);
  // text(prov3, 360, 50, 790, 200);

  // textFont('Courier New');
  //   textSize(35);
  //   fill(225);
  //   text(prov2, 315, 50,790, 200);
  
}
