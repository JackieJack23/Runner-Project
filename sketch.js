var runner, runner_running;
var track, trackImage;
var left_invisibleBoundry, right_invisibleBoundry;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png")
  trackImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200, 400, 400)
  track.addImage("track", trackImage)
  //track.scale = 1

  runner = createSprite(200, 325, 20, 50)
  runner.addAnimation("running", runner_running)
  runner.scale = 0.07

  track.velocityY = 10

  //Boundries
  left_invisibleBoundry = createSprite(70, 200, 5, 400)
  right_invisibleBoundry = createSprite(335, 200, 5, 400)

  left_invisibleBoundry.visible = false
  right_invisibleBoundry.visible = false
}

function draw() {
  background(0);
  drawSprites()

  if (track.y > 400)
  {
    track.y = height/2;
  }

  runner.collide(right_invisibleBoundry)
  runner.collide(left_invisibleBoundry)

  runner.x = World.mouseX

}
