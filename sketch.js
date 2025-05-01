const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "r1": 55, "start1": 3.14, "stop1": 6.28, "x1": 0, "y1": 30,
  "r2": 150, "start2": 	1.29,    "stop2": 	1.85, "x2": 0, "y2": -150
}

const letterB = {
  "r1": 20, "start1": 4.3, "stop1": 8.0, "x1": -5, "y1": -25,
  "r2": 25, "start2": 4.4, "stop2": 8.5, "x2": 0, "y2": 20,
  "r3": 150, "start3": 	1.29-1.57, "stop3": 1.82-1.57, "x3": -160, "y3": 0
}

const letterC = {
  "r1": 50, "start1": 0.4,  "stop1": 5.88, "x1": 0, "y1": 0
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;
  //let center_x = 50;
  //let center_y = 150;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  // draw two circles
  /*fill(darkGreen);
  ellipse(posx, posy, 150, 150);
  fill(lightGreen);
  ellipse(pos2x, pos2y, size2, size2);*/

  for (let i = 1; i <= 4; i++) {
    const r = letterData["r" + i];
    const start = letterData["start" + i];
    const stop = letterData["stop" + i];
    const x = posx + (letterData["x" + i] || 0);
    const y = posy + (letterData["y" + i] || 0);
    const scaleX = letterData["scaleX" + i] || 1;
    const scaleY = letterData["scaleY" + i] || 1;

    if (r && start !== undefined && stop !== undefined) {
      push();
      translate(x, y);
      scale(scaleX, scaleY);
      stroke(0);
      strokeWeight(4);
      noFill();
      arc(0, 0, r * 2, r * 2, start, stop);
      pop();
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

