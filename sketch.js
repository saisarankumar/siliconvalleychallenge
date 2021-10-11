var ninja, ninjaImg;
var thanosLaser, thanosLaserImg;
var ninjaImage
var fireState = "NO";
var score = 0;
var is1state = 0;
var is2state = 0;
var is3state = 0;
var is4state = 0;
var is5state = 0;
var is6state = 0;
var friend1state = 0;
var friend2state = 0;
var friend3state = 0;
var gameState = "SERVE";
var minScore = 50;
var scoreIncrement = 50;

function preload(){
  ninjaI = loadImage("images/1.png");
  avenger1Img = loadAnimation("images/11.png","images/12.png","images/13.png","images/14.png","images/15.png");
  ninjaImg = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
  ninjaFightingImg = loadAnimation("images/sh1.png","images/sh2.png","images/sh3.png","images/sh4.png","images/sh5.png","images/sh6.png");
  ninjaShootingImg = loadAnimation("images/sh2.png","images/sh3.png","images/sh4.png","images/sh5.png","images/sh6.png");
  ninjaJumpingImg = loadAnimation("images/sh4.png","images/sh4.png");
  bgImg = loadImage("images/Untitled.png");
  bgImg1 = loadImage("images/Untitled1.png");
  bgImg2 = loadImage("images/Untitled2.png");
  bgImg3 = loadImage("images/Untitled3.png");
  bgImg4 = loadImage("images/Untitled4.png");
  bgImg5 = loadImage("images/Untitled5.png");
  bgImg6 = loadImage("images/Untitled6.png");
  soldierImg = loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png","images/s7.png","images/s8.png","images/s9.png","images/s10.png","images/s11.png");
  airplaneImg = loadImage("images/airplane.png");
  missileImg = loadImage("images/missile.png"); 
  fireImg = loadImage("images/fire.png");
  dinoImg = loadAnimation("images/dino1.png","images/dino2.png","images/dino3.png","images/dino4.png","images/dino5.png","images/dino6.png")
  dinoImg1 = loadAnimation("images/dino1.png","images/dino1.png");
  bulletImg = loadImage("images/b.png");
  i1Img = loadImage("images/i1.png");
  i2Img = loadImage("images/i2.png");
  i3Img = loadImage("images/i3.png");
  i4Img = loadImage("images/i4.png");
  i5Img = loadImage("images/i5.png");
  i6Img = loadImage("images/i6.png");
  thanosImg = loadImage("images/thanos.png");
  laserImg = loadImage("images/laser.png");
  ninjaStopImg = loadAnimation("images/sh7.png","images/sh7.png");
  ndImg = loadImage("images/nd.png");
  gameoverImg = loadImage("images/gameover.png");
  winImg = loadImage("images/youwin.png");
  sound1 = loadSound("bullet.mp3");
  stoneGrabSound = loadSound("StoneGrab.mp3");
  laserShootSound = loadSound("LaserShoot.wav");
  dinosaurSound = loadSound("Toy-dinosaur.mp3");
  airplaneSound = loadSound("airplane.mp3");
  missileSound = loadSound("missile.mp3");
  bgMusic = loadSound("BGMusic.mp3");
  thanosLaserImg = loadImage("images/thanoslaser.png");
  friend1_Img = loadAnimation("images/Run000.png","images/Run001.png","images/Run002.png","images/Run003.png","images/Run004.png","images/Run005.png","images/Run006.png","images/Run007.png","images/Run008.png");
  friend2_Img = loadAnimation("images/11.png","images/12.png","images/13.png","images/14.png","images/15.png");
  friend3_Img = loadAnimation("images/fighter1.png","images/fighter2.png","images/fighter3.png","images/fighter4.png","images/fighter5.png","images/fighter6.png");
  friend1_stand_Img = loadAnimation("images/Run001.png");
  friend2_stand_Img = loadAnimation("images/15.png");
  friend3_stand_Img = loadAnimation("images/fighter1.png");
  ninja_ball_Img = loadImage("images/shadowball.png");
  friend1_ball_Img = loadImage("images/psyhicball.png");
  friend2_ball_Img = loadImage("images/redball.png");
  friend3_ball_Img = loadImage("images/lightningball.png");
}

function setup() {

  createCanvas(1500, 400);

  createBackground();
  createNinja();
  createGround();
  createDeadNinja();
  createGameOver();
  createYouWin();
  createInfinityst1();
  createInfinityst2();
  createInfinityst3();
  createInfinityst4();
  createInfinityst5();
  createInfinityst6();
  createFriendst1();
  createFriendst2();
  createFriendst3();
  createThanos();
  createThanosLaser();
  createLaser();
  createninjaball();
  createFriend1ball();
  createFriend2ball();
  createFriend3ball();

  dinoGroup = new Group;
  fireGroup = new Group;
  soldierGroup = new Group;
  airplaneGroup = new Group;
  missileGroup = new Group;
  bulletGroup = new Group;
  i1Group = new Group;
  i2Group = new Group;
  i3Group = new Group;
  i4Group = new Group;
  i5Group = new Group;
  i6Group = new Group;
}

function draw() {
  background(0,0,0);
  ninja.collide(ground);

  if(gameState === "SERVE"){
    fill("gold");
    textSize(24);
    text("CONTROLS FOR THE GAME", 100, 100);
    text("press space button to jump", 100, 130);
    text("press 's' to fire", 100, 160);
    text("collect the stones", 100, 190);
    text("press 'u' to shoot laser to kill thanos", 100, 220);
    text("press 'c' to start", 100, 250);
    
    fill("lightgreen");
    textSize(24);
    text("NINJA VS THANOS", 700, 30);

    if(keyDown("c")){
      gameState = "PLAY";
      bgMusic.play();
    }
  }

  if(gameState === "PLAY"){
    console.log(1);
    if(bg.x < 0){
      bg.x = bg.width/2;
    }  

    if(score >= minScore && score <= (minScore+scoreIncrement-1)){
      if(is1state === 0){
        is1state = 1;
        is1.visible=true;
        is1.velocityX = -10;
      }
      bg.addImage(bgImg1);
    }else if(score >= (minScore+scoreIncrement) && score <=(minScore+2*scoreIncrement-1)){
      if(is2state === 0){
        is2state = 1;
        is2.visible=true;
        is2.velocityX = -10;
      }
      bg.addImage(bgImg2);
    }else if(score >= (minScore+2*scoreIncrement) && score <=(minScore+3*scoreIncrement-1)){
      if(is3state === 0){
        is3state = 1;
        is3.visible=true;
        is3.velocityX = -10;
      }
      bg.addImage(bgImg3);
    }else if(score >= (minScore+3*scoreIncrement) && score <=(minScore+4*scoreIncrement-1)){
      if(is4state === 0){
        is4state = 1;
        is4.visible=true;
        is4.velocityX = -10;
      }
      bg.addImage(bgImg4);
    }else if(score >= (minScore+4*scoreIncrement) && score <=(minScore+5*scoreIncrement-1)){
      if(is5state === 0){
        is5state = 1;
        is5.visible=true;
        is5.velocityX = -10;
      }
      bg.addImage(bgImg5);
    }else if(score >= (minScore+5*scoreIncrement) && score <=(minScore+6*scoreIncrement-1)){
      if(is6state === 0){
        is6state = 1;
        is6.visible=true;
        is6.velocityX = -10;
      }
    }else if(score >= (minScore+6*scoreIncrement) && score <=(minScore+7*scoreIncrement-1)){
      if(friend1state === 0){
        friend1state = 1;
        friend1.visible=true;
        friend1.velocityX = -10;
        console.log("friend1");
      }
    }else if(score >= (minScore+7*scoreIncrement) && score <=(minScore+8*scoreIncrement-1)){
      if(friend2state === 0){
        friend2state = 1;
        friend2.visible=true;
        friend2.velocityX = -10;
      }
    }else if(score >= (minScore+8*scoreIncrement)){
      if(friend3state === 0){
        friend3state = 1;
        friend3.visible=true;
        friend3.velocityX = -10;
      }
    }

    if(is1state === 1 && is1.x < 100){
      is1.velocityX = 0;
      is1.x = 1340;
      is1.y = 80;
      is1.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is2state === 1 && is2.x < 100){
      is2.velocityX = 0;
      is2.x = 1370;
      is2.y = 80;
      is2.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is3state === 1 && is3.x < 100){
      is3.velocityX = 0;
      is3.x = 1400;
      is3.y = 80;
      is3.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is4state === 1 && is4.x < 100){
      is4.velocityX = 0;
      is4.x = 1430;
      is4.y = 80;
      is4.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is5state === 1 && is5.x < 100){
      is5.velocityX = 0;
      is5.x = 1460;
      is5.y = 80;
      is5.scale = 0.4;
      stoneGrabSound.play();
    }

    if(is6state === 1 && is6.x < 100){
      is6.velocityX = 0;
      is6.x = 1490;
      is6.y = 80;
      is6.scale = 0.4;
      stoneGrabSound.play();
      gameState = "THANOS";
    }

    if(friend1state === 1 && friend1.x < 100){
      friend1.velocityX = 0;
      friend1.x = 200;
      friend1.y = 290;
      friend1.scale = 0.2;
      stoneGrabSound.play();
    }

    
    if(friend2state === 1 && friend2.x < 100){
      friend2.velocityX = 0;
      friend2.x = 300;
      friend2.y = 290;
      friend2.scale = 0.7;
      stoneGrabSound.play();
    }

    
    if(friend3state === 1 && friend3.x < 100){
      friend3.velocityX = 0;
      friend3.x = 400;
      friend3.y = 290;
      friend3.scale = 0.8;
      stoneGrabSound.play();
      
      gameState = "THANOS1";
    }

    if(keyDown("space") && ninja.y >= 200){
      ninja.velocityY = -16;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.8;
    }

    if(keyWentUp("space")){
      ninja.changeAnimation("running", ninjaImg);
      ninja.scale = 0.5;
    }

    ninja.velocityY = ninja.velocityY + 0.8;

    
    if (keyDown("s") && fireState==="NO") {
      
      fireState="YES";
      ninja.changeAnimation("shooting", ninjaShootingImg);
      ninja.scale = 0.7;
      ninja.pause();
      ninja.setFrame(0);
      ninja.nextFrame();
      ninja.nextFrame();
      ninja.nextFrame();
      ninja.nextFrame();
      fire1();
    
    }

    for(var i=0;i<dinoGroup.length;i++){
      if(fireGroup.isTouching(dinoGroup.get(i))){
        fireGroup.destroyEach();
        dinoGroup.get(i).remove();
        dinosaurSound.stop();
        score = score + 1;
      }  
    }
    
    for(var i=0;i<airplaneGroup.length;i++){
      if(fireGroup.isTouching(airplaneGroup.get(i))){
        fireGroup.destroyEach();
        airplaneGroup.get(i).remove();
        missileGroup.get(i).remove();
        airplaneSound.stop();
        missileSound.stop();
        score = score + 2;
      }
    }
      
    for(i=0;i<soldierGroup.length;i++){
      if(fireGroup.isTouching(soldierGroup.get(i))){
        fireGroup.destroyEach();
        soldierGroup.get(i).remove();
        bulletGroup.get(i).remove();
        score = score + 3;
      }  
    }
    
    if(ninja.isTouching(dinoGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      sound1.stop();
      stoneGrabSound.stop();
      laserShootSound.stop();
      dinosaurSound.stop();
      airplaneSound.stop();
      missileSound.stop();
      bgMusic.stop();
      gameState = "END";
    }

    if(ninja.isTouching(airplaneGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      sound1.stop();
      stoneGrabSound.stop();
      laserShootSound.stop();
      dinosaurSound.stop();
      airplaneSound.stop();
      missileSound.stop();
      bgMusic.stop();
      gameState = "END";
    }

    if(ninja.isTouching(missileGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      sound1.stop();
      stoneGrabSound.stop();
      laserShootSound.stop();
      dinosaurSound.stop();
      airplaneSound.stop();
      missileSound.stop();
      bgMusic.stop();
      gameState = "END";
    }

    if(ninja.isTouching(bulletGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      sound1.stop();
      stoneGrabSound.stop();
      laserShootSound.stop();
      dinosaurSound.stop();
      airplaneSound.stop();
      missileSound.stop();
      bgMusic.stop();
      gameState = "END";
    }

    if(ninja.isTouching(soldierGroup)){
      bg.velocityX = 0;
      ninja.changeAnimation("jumping", ninjaJumpingImg);
      ninja.scale = 0.7;
      sound1.stop();
      stoneGrabSound.stop();
      laserShootSound.stop();
      dinosaurSound.stop();
      airplaneSound.stop();
      missileSound.stop();
      bgMusic.stop();
      gameState = "END";
    }

      
  if (keyWentUp("s")){
    fireState="NO";
    ninja.changeAnimation("running", ninjaImg);
    ninja.scale = 0.5
  }

  if(airplaneGroup.x <= 100){
    airplaneSound.stop();
    missileSound.stop();
  }

  airplane1();
  soldier1();
  dino1();
  drawSprites();
  fill("yellow");
  text("SCORE:"+score, 1400, 50);
  }  
  
  if(gameState === "END"){
    for(var i=0;i<dinoGroup.length;i++){
      dinoGroup.get(i).remove();
    }
    for(var i=0;i<airplaneGroup.length;i++){
      airplaneGroup.get(i).remove();
    }
    for(var i=0;i<missileGroup.length;i++){
      missileGroup.get(i).remove();
    }
    for(var i=0;i<soldierGroup.length;i++){
      soldierGroup.get(i).remove();
    }
    for(var i=0;i<bulletGroup.length;i++){
      bulletGroup.get(i).remove();
    }
    ninja.visible = false;

    ninjaDied.visible = true;
    gameOver.visible=true;
    bgMusic.stop();
    if(keyDown("r")){
      
      bgMusic.play();
      
      score = 0;
      bg.velocityX = -4;
      
      is1.remove();
      is2.remove();
      is3.remove();
      is4.remove();
      is5.remove();
      is6.remove();
      friend1.remove();
      friend2.remove();
      friend3.remove();

      createInfinityst1();
      createInfinityst2();
      createInfinityst3();
      createInfinityst4();
      createInfinityst5();
      createInfinityst6();
      createFriendst1();
      createFriendst2();
      createFriendst3();
      
      is1state = 0;
      is2state = 0;
      is3state = 0;
      is4state = 0;
      is5state = 0;
      is6state = 0;
      friend1state = 0;
      friend2state = 0;
      friend3state = 0;

      ninjaDied.visible = false;
      gameOver.visible = false; 
      ninja.visible = true;
      ninja.changeAnimation("running", ninjaImg);
      ninja.scale = 0.5;
      bg.addImage(bgImg);

      gameState = "PLAY";
    }

    drawSprites();
    fill("yellow");
    textSize(24);
    textFont("algerian");
    text("press 'r' to restart", 640, 350);   
  }
  
  if(gameState === "THANOS"){
    bg.addImage(bgImg);
    bg.velocityX = 0;
    thanos.visible =true;

    if(laser.x >= 800){
      laser.visible = false;
    }

    if(thanos.isTouching(laser)){
      gameState = "PLAY";
      thanos.visible =false;
      ninja.changeAnimation("running", ninjaImg);
      bg.addImage(bgImg6);
      bg.velocityX = -4;
    }
    
    if(keyDown("u")){
      fill("yellow");
      laser.velocityX = 30;
      laser.visible = true;
      thanosLaser.velocityX = -30;
      thanosLaser.visible = true;

      laserShootSound.play();  

    }

    ninja.changeAnimation("stop", ninjaStopImg);
    ninja.scale = 0.7;

    for(var i=0;i<dinoGroup.length;i++){
      dinoGroup.get(i).remove();
    }

    for(var i=0;i<airplaneGroup.length;i++){
      airplaneGroup.get(i).remove();
    }

    for(var i=0;i<missileGroup.length;i++){
      missileGroup.get(i).remove();
    }

    for(var i=0;i<soldierGroup.length;i++){
      soldierGroup.get(i).remove();
    }

    for(var i=0;i<bulletGroup.length;i++){
      bulletGroup.get(i).remove();
    }

    ninja.velocityY = ninja.velocityY + +0.8;

    drawSprites();
    fill("yellow");
    textSize(20);
    text("press 'u' to kill thanos", 500, 125);
    text("WARNING:you are going back in time machine", 400, 100);
  }

  if(gameState === "THANOS1"){
    console.log("1");
    bg.addImage(bgImg);
    bg.velocityX = 0;
    thanos.visible = true;
    ninja.changeAnimation("stop", ninjaStopImg);
    friend1.changeAnimation("friend1stand", friend1_stand_Img);
    friend2.changeAnimation("friend2stand", friend2_stand_Img);
    friend3.changeAnimation("friend3stand", friend3_stand_Img);

    if(keyDown("l")){
      ninja_ball.visible = true;
      ninja_ball.velocityX = 30;
      friend1_ball.visible = true;
      friend1_ball.velocityX = 30;
      friend2_ball.visible = true;
      friend2_ball.velocityX = 30;
      friend3_ball.visible = true;
      friend3_ball.velocityX = 30;
    }

    if(thanos.isTouching(ninja_ball)){
      gameState = "WIN";
    }

    for(var i=0;i<dinoGroup.length;i++){
      dinoGroup.get(i).remove();
    }

    for(var i=0;i<airplaneGroup.length;i++){
      airplaneGroup.get(i).remove();
    }

    for(var i=0;i<missileGroup.length;i++){
      missileGroup.get(i).remove();
    }

    for(var i=0;i<soldierGroup.length;i++){
      soldierGroup.get(i).remove();
    }

    for(var i=0;i<bulletGroup.length;i++){
      bulletGroup.get(i).remove();
    }

    drawSprites();
    fill("yellow");
    textFont("algerian");
    text("press 'l' to kill thanos", 700, 200);
  }

  if(gameState === "WIN"){
    win.visible = true;  
    ninja.visible = false;
    thanos.visible = false;
    bg.visible = false;
    laser.visible = false;
    friend1.visible = false;
    friend2.visible = false;
    friend3.visible = false;
    is1.visible = false;
    is2.visible = false;
    is3.visible = false;
    is4.visible = false;
    is5.visible = false;
    is6.visible = false;
    bgMusic.stop();
    drawSprites();

  }
  airplaneGroup.x = missileGroup.x;      
}