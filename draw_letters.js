/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000128";
var systemLineColor = 255;
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  //stroke(255);
  //strokeWeight(4);
  //noFill();

  //parameters
 // First arc
 // Arc 1
 const centerX = 50;
const centerY = 150;

  //Draw all glow arcs
  for (let i = 1; i <= 4; i++) {
    const r = letterData["r" + i];
    const start = letterData["start" + i];
    const stop = letterData["stop" + i];
    const x = centerX + (letterData["x" + i] || 0);
    const y = centerY + (letterData["y" + i] || 0);
    const scaleX = letterData["scaleX" + i] || 1;
    const scaleY = letterData["scaleY" + i] || 1;
  
    if (r && start !== undefined && stop !== undefined) {
      //Layer
      const layers = [
        { weight: 20, alpha: 30 },
        { weight: 14, alpha: 50 },
        { weight: 10, alpha: 80 },
      ];
  
      for (let layer of layers) {
        push();
        translate(x, y);
        scale(scaleX, scaleY);
        stroke(0, 255, 255, layer.alpha); //Electric blue with fading opacity
        strokeWeight(layer.weight);
        noFill();
        arc(0, 0, r * 2, r * 2, start, stop);
        pop();
      }
    }
  }

  //Draw all normal white arcs
  for (let i = 1; i <= 4; i++) {
    const r = letterData["r" + i];
    const start = letterData["start" + i];
    const stop = letterData["stop" + i];
    const x = centerX + (letterData["x" + i] || 0);
    const y = centerY + (letterData["y" + i] || 0);
    const scaleX = letterData["scaleX" + i] || 1;
    const scaleY = letterData["scaleY" + i] || 1;

    if (r && start !== undefined && stop !== undefined) {
      push();
      translate(x, y);
      scale(scaleX, scaleY);
      stroke(255); //Pure white
      strokeWeight(4); //Normal thickness
      noFill();
      arc(0, 0, r * 2, r * 2, start, stop);
      pop();
    }
  }

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50  + letterData["offsetx"];
  //let pos2y = 150 + letterData["offsety"];

  // draw two circles
  //fill(darkGreen);
  //ellipse(50, 150, 75, 75);
  //fill(lightGreen);
  //ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let keys = [
    "r1", "start1", "stop1", "x1", "y1",
    "r2", "start2", "stop2", "x2", "y2",
    "r3", "start3", "stop3", "x3", "y3"
  ];
  for (let k of keys) {
    if (k in oldObj && k in newObj) {
      new_letter[k] = map(percent, 0, 100, oldObj[k], newObj[k]);
    }
  }
  return new_letter;
  //let new_letter = {};
  //new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  //new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  //new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  //return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
