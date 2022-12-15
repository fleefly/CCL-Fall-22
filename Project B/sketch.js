let seq = 0;
let p1 = "Do you know the story of Pandora?";
let p2 =
  "Pandora was the first woman on earth, crafted by the gods to be beautiful, intelligent, and curious. She was given a box by the gods, and told never to open it. However, just like you, she opened the box.";
let p3 = "Eve was the first woman to exist in the bible. She lived in a heavenly garden, but was told by god never to eat one of the apples growing there, or she would die. When she tried one, she did not die. Although it had been a lie, god was angry at her disobedience, and cast her out of the garden forever.";
let p4 = "Prometheus stole fire from the gods to give to humankind, and was punished by them for eternity after. However, without fire humans would have no civilization.";
let pro1 = "Thy Godlike crime was to be ";
let prov1 = "kind,";
let prov2 = "curious,";
let prov3 = "wise,";
let pro2 = "To render with thy precepts less";
let pro3 = "The sum of human wretchedness,";
let pro4 = "And strengthen man with his own mind.";
let pro5 = "- An excerpt from Lord Byron's poem 'Prometheus.'";

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
  } //else {
  //   drawEnding();
  // }
}

function mousePressed() {
  proceedSequence();
}

function proceedSequence() {
  seq++;
  if (seq == 5) {
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
  text(p1, 140, 75, 635, 200);

  textFont("Courier New");
  textSize(18);
  fill(225);
  text(p2, 156, 295, 585, 150);
}

function drawScene2() {
  background(0);
  
  //eve apple
  stroke(53, 39, 29);
  strokeWeight(2);
  fill(199, 55, 47);
  ellipse(450, 350, 495, 500);
  strokeWeight(20);
  line(450, 125, 450, 50);
  noStroke();
  fill(0, 102, 0);
  ellipse(550, 120, 210, 90);
  
    if (keyIsPressed === true) {
    noStroke();
    fill(0);
    ellipse(244, 217, 180, 190);
  }
  
  textFont("Courier New");
  textSize(18);
  fill(225);
  text(p3, 230, 260, 450, 500);
  
  textAlign(CENTER);
  textFont("Courier New");
  textSize(13);
  fill(225);
  text("press any key", 139, 10, 635, 200);
}

function drawScene3() {
  noStroke();
  textFont("Courier New");
  textSize(18);
  fill(225);
  text(p4, 290, 150, 330, 500);

  //fire
  if (keyIsPressed === true) {
    fill(0, 0, 0, 0);
  } else {
    fill(220, random(50, 140), 26);
  }

  frameRate(4);
  //fill(220, random(50, 140), 26);
  noStroke();
  //left
  triangle(313, 292, 365, 187, 460, 313);
  //right
  triangle(450, 305, 521, 160, 588, 300);
  //middle
  triangle(341, 294, 441, 90, 548, 305);

  //torch
  stroke(53, 39, 29);
  strokeWeight(10);
  fill(105, 75, 30);
  quad(375, 436, 525, 436, 509, 630, 395, 645);
  ellipse(450, 650, 200, 50);
  ellipse(450, 420, 200, 50);
  arc(450, 284, 290, 270, 0, HALF_PI * 2);
  
  textAlign(CENTER);
  noStroke();
  textFont("Courier New");
  textSize(13);
  fill(225);
  text("press any key", 136, 10, 630, 200);
}

function drawScene4() {
  noStroke();

  textFont("Courier New");
  textSize(35);
  fill(225);
  text(pro1, 70, 150, 650, 200);

  textFont("Courier New")
  text(prov1, 352, 150, 790, 200);

  textFont("Courier New");
  text(pro2, 100, 200, 700, 200);

  textFont("Courier New");
  text(pro3, 100, 250, 700, 200);

  textFont("Courier New");
  text(pro4, 60, 300, 800, 200);

  textFont("Courier New");
  text(pro5, 80, 350, 700, 200);
}
