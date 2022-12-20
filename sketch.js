// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let loadingLevel;
let lines;
let tiles;
let tilesWide, tilesHigh;
let tileWidth, tileHeight;
let bg;
let sTile, sDifTile, sCrack, sBrownSpot;
let tR, tL, tM, bR, bL, bM, wR, wL, wM, sR, sL;
let dTR, dTL, dTM, dR, dL, dM;
function preload() {
  //load positions for level
  loadingLevel = "2.text";
  lines = loadStrings(loadingLevel);

  //load images for tiles
  bg = loadImage("gameSprites/blackBg.jpg");
  sTile = loadImage("gameSprites/floorTileSprites/tile000.png");
  sDifTile= loadImage("gameSprites/floorTileSprites/tile001.png");
  sCrack = loadImage("gameSprites/floorTileSprites/tile002.png");
  sBrownSpot = loadImage("gameSprites/floorTileSprites/tile004.png");
  //load walls

  tR = loadImage("gameSprites/wallSprites/topRight.png");
  tL = loadImage("gameSprites/wallSprites/topLeft.png");
  tM = loadImage("gameSprites/wallSprites/topMiddle.png");
  bR = loadImage("gameSprites/wallSprites/bottomRight.png");
  bL = loadImage("gameSprites/wallSprites/bottomLeft.png");
  bM = loadImage("gameSprites/wallSprites/bottomMiddle.png");
  wR = loadImage("gameSprites/wallSprites/wallRight.png");
  wL = loadImage("gameSprites/wallSprites/wallLeft.png");
  wM = loadImage("gameSprites/wallSprites/wallMiddle.png");
  sR = loadImage("gameSprites/wallSprites/right.png");
  sL = loadImage("gameSprites/wallSprites/left.png");


  //load doors
  dTR = loadImage("gameSprites/wallSprites/doors/doorTR.png");
  dTL = loadImage("gameSprites/wallSprites/doors/doorTL.png");
  dTM = loadImage("gameSprites/wallSprites/doors/doorTM.png");
  dR = loadImage("gameSprites/wallSprites/doors/doorR.png");
  dL = loadImage("gameSprites/wallSprites/doors/doorL.png");
  dM = loadImage("gameSprites/wallSprites/doors/doorM.png");


}

function setup() {
  let cnv = createCanvas(1024, 576);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);

  noSmooth();
  
  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}



function draw() {
  display();
}

function display() {
  //display background
  image(bg, 0, 0, width, height);
  //check tiles
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  //tiles
  if (location === ".") {
    image(sTile, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === ",") {
    image(sDifTile, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "+") {
    image(sCrack, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "*") {
    image(sBrownSpot, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }

  // walls

  // top of walls
  else if (location === "R") {
    image(tR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "L") {
    image(tL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "M") {
    image(tM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }

  // bottom of walls
  else if (location === "l") {
    image(bL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "r") {
    image(bR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "m") {
    image(bM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  // brick part
  else if (location === "]") {
    image(wR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "[") {
    image(wL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "#") {
    image(wM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  // sides
  }
  else if (location === ")") {
    image(sR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "(") {
    image(sL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  //doors
  else if (location === "t") {
    image(dTR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "w") {
    image(dTL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "e") {
    image(dTM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "f") {
    image(dR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "s") {
    image(dL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
  else if (location === "d") {
    image(dM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
}