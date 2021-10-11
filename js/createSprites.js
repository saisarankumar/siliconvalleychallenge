


function soldier1() {
  
  if (frameCount % 100 === 0) {
    soldier = createSprite(1500, 280, 20, 20);
    soldier.addAnimation("dragonRunning", soldierImg);
    soldier.velocityX = -8;
    soldier.scale = 0.6;
    soldier.setCollider("rectangle", 0, 0, 100, 250);
    soldier.lifetime = 300;
    soldierGroup.add(soldier);
    
    bullet = createSprite(soldier.x, 245, 10, 10);
    bullet.addImage(bulletImg);
    bullet.velocityX = -8;    
    bullet.scale = 0.05;
      
    bulletGroup.add(bullet);
    
  }

  for(var i=0;i < soldierGroup.length; i++){
    if(soldierGroup.get(i).x <= 950){
      bulletGroup.get(i).velocityX = -20;
      sound1.play();
    }
  }
  
  for(var i=0; i < bulletGroup.length;i++){ 
    if(bulletGroup.get(i).x <= 750){
      sound1.stop();
    }
  }
  
}

function airplane1() {
  
  if (frameCount % 200 === 0) {
    airplane = createSprite(1500, 100, 20, 20);
    airplane.addImage("flying", airplaneImg);
    airplane.velocityX = -8;
    airplane.scale = 0.5;
    airplane.lifetime = 300;
    airplane.setCollider("rectangle", 0, 0, 200, 200);
    
    airplane.debug = false;
    airplaneSound.play();

    airplaneGroup.add(airplane);
    

    missile = createSprite(1500, 100, 20, 20);
    missile.addImage(missileImg);
    missile.scale = 0.5;
    missile.velocityX = -8;
    missile.lifetime = 300;
    missile.visible = true;
    missile.setCollider("rectangle", 0, 0, 10, 10);

    missileGroup.add(missile);

  }

  for(var i=0;i < airplaneGroup.length; i++){
    if(missileGroup.get(i).x <= 950){
      missileGroup.get(i).velocityX = -40;
      missileSound.play();
    }
    
    if(airplaneGroup.get(i).x <= 500){
      airplaneGroup.get(i).destroy();
    }
  }  
}

function fire1() {
  fire = createSprite(ninja.x, ninja.y, 20, 20);
  fire.addImage(fireImg);
  fire.setCollider("rectangle", 0, 10, 50, 35);
  fire.scale = 1;
  fire.velocityX = 64;
  fire.lifetime = 25;

  ninja.depth = fire.depth;
  ninja.depth = ninja.depth + 1;

  fireGroup.add(fire);

  return fire;  
}

function dino1(){
  if(frameCount % 150 === 0){
    dino = createSprite(1500, 300, 20, 20);
    dino.addAnimation("dinoRunning", dinoImg);
    dino.addAnimation("dinostop", dinoImg1);
    dino.velocityX = -10;
    dino.setCollider("rectangle", 0, 0, 200, 150);

    dino.depth = bg.depth;
    dino.depth = dino.depth + 1;

    dino.debug = false;
    dino.lifetime = 300;
    dinosaurSound.play();

    dinoGroup.add(dino);
  }
}

function createInfinityst1(){
  is1 = createSprite(500, 300, 10, 10);
  is1.addImage(i1Img);
  is1.visible = false;
  is1.scale = 0.7;
}

function createInfinityst2(){
  is2 = createSprite(500, 300, 10, 10);
  is2.addImage(i2Img);
  is2.visible = false;
  is2.scale = 0.7;
}

function createInfinityst3(){
  is3 = createSprite(500, 300, 10, 10);
  is3.addImage(i3Img);
  is3.visible =false;
  is3.scale = 0.7;
}

function createInfinityst4(){
  is4 = createSprite(500, 300, 10, 10);
  is4.addImage(i4Img);
  is4.visible=false;
  is4.scale = 0.7;
}

function createInfinityst5(){
  is5 = createSprite(500, 300, 10, 10);
  is5.addImage(i5Img);
  is5.visible=false;
  is5.scale = 0.7;
}

function createInfinityst6(){
  is6 = createSprite(500, 300, 10, 10);
  is6.addImage(i6Img);
  is6.visible=false;
  is6.scale = 0.7;
}

function createFriendst1(){
  friend1 = createSprite(500, 300, 10, 10);
  friend1.addAnimation("friend1", friend1_Img);
  friend1.addAnimation("friend1stand", friend1_stand_Img);
  friend1.visible=false;
  friend1.scale = 0.3;
}

function createFriendst2(){
  friend2 = createSprite(500, 300, 10, 10);
  friend2.addAnimation("friend2", friend2_Img);
  friend2.addAnimation("friend2stand", friend2_stand_Img);
  friend2.visible=false;
  friend2.scale = 0.7;
}

function createFriendst3(){
  friend3 = createSprite(500, 300, 10, 10);
  friend3.addAnimation("friend3", friend3_Img);
  friend3.addAnimation("friend3stand", friend3_stand_Img);
  friend3.visible=false;
  friend3.scale = 0.8;
}

function createNinja(){
  ninja = createSprite(100, 290, 20, 20);
  ninja.addAnimation("running",ninjaImg);
  ninja.addAnimation("fighting1",ninjaFightingImg);
  ninja.addAnimation("shooting", ninjaShootingImg);
  ninja.addAnimation("jumping", ninjaJumpingImg);
  ninja.addAnimation("stop", ninjaStopImg);
  ninja.scale = 0.5;
  ninja.setCollider("rectangle", 0, 0, 60, 260);
}

function createDeadNinja(){
  ninjaDied = createSprite(100,290,20,20);
  ninjaDied.addImage(ndImg);
  ninjaDied.scale = 0.7;
  ninjaDied.visible=false;
}

function createGameOver(){
  gameOver = createSprite(750,200,20,20);
  gameOver.addImage(gameoverImg);
  gameOver.scale = 0.7;
  gameOver.visible=false;
}

function createYouWin(){
  win = createSprite(750,200,20,20);
  win.addImage(winImg);
  win.scale = 0.7;
  win.visible=false;
}

function createThanos(){
  thanos = createSprite(1400, 270, 10, 10);
  thanos.addImage(thanosImg);
  thanos.scale = 0.5;
  thanos.debug = true;
  thanos.visible =false;
  thanos.setCollider("rectangle", 0, 0, 200, 300);
}

function createLaser(){
  laser = createSprite(130, 270, 10, 10);
  laser.addImage(laserImg);
  laser.velocityX = 0;
  laser.scale = 0.25;
  laser.visible = false;
  laser.setCollider("rectangle", 0, 0, 40, 200);
  laser.debug = false;
}

function createGround(){
  ground = createSprite(750, 350, 1500, 20);
  ground.visible = false;
  ground.debug = false;
}

function createBackground(){
  bg = createSprite(750, 200);
  bg.addImage(bgImg);
  bg.velocityX = -4;
}

function createThanosLaser(){
  thanosLaser = createSprite(1400, 270);
  thanosLaser.debug = false;
  thanosLaser.setCollider("rectangle", 0, 0, 2, 2);
  thanosLaser.addImage(thanosLaserImg);
  thanosLaser.visible = false;
  thanosLaser.scale = 0.5;
  thanosLaser.velocityX = 0;
}

function createninjaball(){
  ninja_ball = createSprite(200, 270);
  ninja_ball.addImage(ninja_ball_Img);
  ninja_ball.visible = false;
  ninja_ball.scale = 0.2;
  ninja_ball.velocityX = 0;
}

function createFriend1ball(){
  friend1_ball = createSprite(200, 270);
  friend1_ball.addImage(friend1_ball_Img);
  friend1_ball.visible = false;
  friend1_ball.scale = 0.2;
  friend1_ball.velocityX = 0;
}

function createFriend2ball(){
  friend2_ball = createSprite(200, 270);
  friend2_ball.addImage(friend2_ball_Img);
  friend2_ball.visible = false;
  friend2_ball.scale = 0.2;
  friend2_ball.velocityX = 0;
}

function createFriend3ball(){
  friend3_ball = createSprite(200, 270);
  friend3_ball.addImage(friend3_ball_Img);
  friend3_ball.visible = false;
  friend3_ball.scale = 0.2;
  friend3_ball.velocityX = 0;
}

function bg1(){
  bg1 = createSprite(400, 300);
  bg1.addImage(bgImg6);
  bg1.velocityX = 0;
  bg1.visible = false;
  if(bg1.x < 0){
    bg1.x = bg1.width/2;
  }  
}