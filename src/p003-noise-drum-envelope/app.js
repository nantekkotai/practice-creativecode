var yoff = 0.0;        // 2nd dimension of perlin noise
var _noise, _env, _analyzer;

function setup() {
  createCanvas(1200, 500);
  
  //
  // こっから下はdrum
  //
  
  _noise = new p5.Noise(); // other types include 'brown' and 'pink'
  _noise.start();

  // multiply noise volume by 0
  // (keep it quiet until we're ready to make noise!)
  _noise.amp(0);

  _env = new p5.Env();
  // set attackTime, decayTime, sustainRatio, releaseTime
  _env.setADSR(0.001, 0.1, 0.2, 0.1);
  // set attackLevel, releaseLevel
  _env.setRange(1, 0);

  // p5.Amplitude will analyze all sound in the sketch
  // unless the setInput() method is used to specify an input.
  _analyzer = new p5.Amplitude();
}

function draw() {
  background(51);

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  //var xoff = 1;       // Option #1: 2D Noise
  var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 1) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, 100,300);

    // Option #2: 1D Noise
    //var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.02;
  }
  // increment y dimension for noise
  yoff += 0.10;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  //_env.play(_noise);
}