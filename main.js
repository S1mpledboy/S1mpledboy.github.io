var rigthtPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

var game_area = document.getElementById("game_area");
var ctx = game_area.getContext("2d");


var playerImg = new Image();
playerImg.src = "ships/player_ship.png";

var bossParams = {
	width: 890,
	height: 317,
	img_src: "ships/Boss_1.png",
	health: document.getElementById("health"),
	speed : 4 
};

console.log(bossParams);


window.onload = game_areaAdaptationToScreen();
function randInt(max){
	return Math.floor(Math.random() * Math.floor(max));
}

class Boss{
	X = game_area.width/4;
	Y = game_area.height/10;
	img = new Image();
	constructor(params){
		this.img.src = params.img_src;
		this.width = params.width;
		this.height = params.height;
		this.health = params.health.value;
		this.speed = params.speed
	}
	drawBoss(){
		ctx.drawImage(this.img, this.X, this.Y)
	}
	onHit(hitted){
		if (hitted) {
			console.log(this.health);
			this.health -= 5;
			document.getElementById("health").value -= 5;
		}
	}
	moveBoss(){
		this.X = this.X+this.speed
	}
	changeDirection(){
		if (this.X >= game_area.width-this.img.width||this.X<0) {
			this.speed = this.speed*-1
		}
	}
}
var Gorg_Hunter = new Boss(bossParams);
var bulletBossOffsetY = Gorg_Hunter.height/2.5;
var bulletBossOffsetX = Gorg_Hunter.width/2.2;
var bossHitBox;
var bossHitted;
var bossBulettHitBox;

var leftBulletParams = {
	src : "sprites/fire/BossBullet(left).png",
	dx : 2,
	dy : 3,
	emmitplaceX : game_area.width/4+bulletBossOffsetX,
	emmitplaceY : game_area.height/10+bulletBossOffsetY
};
var rightBulletParams = {
	src : "sprites/fire/BossBullet(right).png",
	dx : -2,
	dy : 3,
	emmitplaceX : game_area.width/4+bulletBossOffsetX,
	emmitplaceY : game_area.height/10+bulletBossOffsetY
}
var centerBulletParams = {
	src : "sprites/fire/BossBullet(center).png",
	dx : 0,
	dy : 3,
	emmitplaceX : game_area.width/4+bulletBossOffsetX,
	emmitplaceY : game_area.height/10+bulletBossOffsetY
}

class BossBullet{
	bullet = new Image();
	emmitplaceX;
	emmitplaceY;
	X;
	Y;
	dx;
	dy;
	hitBox = new Array();
	constructor(params){
		this.bullet.src = params.src;
		this.dx = params.dx;
		this.dy = params.dy;
		this.emmitplaceX = params.emmitplaceX;
		this.emmitplaceY = params.emmitplaceY;
		this.X = this.emmitplaceX;
		this.Y = this.emmitplaceY;
	}

	moveBullet(){
		this.X += this.dx;
		this.Y += this.dy;
		this.hitBox = [this.X+20, this.X+this.bullet.width-20, this.Y+20, this.Y+this.bullet.height-20]
		ctx.drawImage(this.bullet, this.X, this.Y);
	}
	getHitBox(){
		return this.hitBox;
	}
}


class PlayerBullet {
	X;
	Y;
	dy = 5;
	bullet = new Image();
	existpl = false;

	getPlayerBullet(){
		this.bullet.src = "sprites/fire/playerBullet.png";
	};
	drawPlayerBullet(){
		this.getPlayerBullet()
		ctx.drawImage(this.bullet, this.X+5, this.Y);
		ctx.drawImage(this.bullet, this.X+25, this.Y);
	};
	onHit(hitted){
		if (hitted) {

			this.existpl = false;
		}
	};
	movePlayerBullet(){
		if (!this.existpl) {
            this.X = playerX;
            this.Y = playerY-50;
            this.drawPlayerBullet();
            this.existpl = true;
		}else if (this.Y < -75){
			this.existpl = false;
		}else{
			this.Y -= this.dy;
            this.drawPlayerBullet();
		}
	};
};

var playerX = game_area.width/2;
var playerY = game_area.height-150;
var playerHitbox;
var playerHitted;
var playerBullet = new PlayerBullet();
var bossBullets = new Array();

function game_areaAdaptationToScreen(){
	if(game_area){
	game_area.width = window.innerWidth;
	game_area.height = window.innerHeight;
	}
};

document.addEventListener("keydown", keyDownInterpreter);
document.addEventListener("keyup", keyUpInterpreter);
window.addEventListener("resize",game_areaAdaptationToScreen);

function keyDownInterpreter(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 68) {
        rigthtPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"|| e.keyCode == 65) {
        leftPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown"|| e.keyCode == 83) {
    	downPressed = true;;
    }
    else if (e.key == "Up" || e.key == "ArrowUp"|| e.keyCode == 87) {
    	upPressed = true;
    }
}

function keyUpInterpreter(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.keyCode == 68) {
        rigthtPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"|| e.keyCode == 65) {
        leftPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown"|| e.keyCode == 83) {
    	downPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp"|| e.keyCode == 87) {
    	upPressed = false;
    }
}

function changeEmmitPlace(bossX,bulletparams) {
	bulletparams.emmitplaceX = bossX+bulletBossOffsetX
	return bulletparams;
}

function createBossBullet(){
	var attackPalce = randInt(3);
	switch(attackPalce) {
		case 0 : 
			changeEmmitPlace(Gorg_Hunter.X, leftBulletParams);
			console.log(leftBulletParams)
			let bossBulletLeft = new BossBullet(leftBulletParams);
			bossBullets.push(bossBulletLeft);
			return bossBullets;
			break;
		case 1 : 
			changeEmmitPlace(Gorg_Hunter.X, centerBulletParams);
			let bossBulletCenter = new BossBullet(centerBulletParams);
			bossBullets.push(bossBulletCenter);
			return bossBullets;
			break;
		case 2 : 
			changeEmmitPlace(Gorg_Hunter.X, rightBulletParams);
			let bossBulletRight = new BossBullet(rightBulletParams);
			bossBullets.push(bossBulletRight);
			return bossBullets;
			break;
	}
};

function bossBulletDelete(){
	for (var i = 0; i < bossBullets.length; i++) {
		if (bossBullets[i].Y>900) {
			bossBullets.splice(i,1);
			return bossBullets
		}
	}
};

function Hit(projectTileHitBox, hittedObjectHitBox){
	if (
		(projectTileHitBox[0]>hittedObjectHitBox[0]&&
		projectTileHitBox[0]<hittedObjectHitBox[1]||
		projectTileHitBox[1]>hittedObjectHitBox[0]&&
		projectTileHitBox[1]<hittedObjectHitBox[1])&&
		(projectTileHitBox[2]>hittedObjectHitBox[2]&&
		projectTileHitBox[2]<hittedObjectHitBox[3]||
		projectTileHitBox[3]>hittedObjectHitBox[2]&&
		projectTileHitBox[3]<hittedObjectHitBox[3])
		){
		return true;
	}
	else {
		return false
	}
};

function bossTick(){
	playerHitBox = [playerX, playerX+playerImg.width, playerY, playerY+playerImg.height];
	if (bossBullets != null) {
		bossBullets.forEach( function(element){
			element.moveBullet();
			bossBulletDelete();
		});
	}
	for (var i = bossBullets.length - 1; i >= 0; i--) {
		var bossBulettHitBox = bossBullets[i].getHitBox();
		playerHitted=Hit(bossBulettHitBox, playerHitBox);
		if (playerHitted) {
			break;
		}
	}
	requestAnimationFrame(bossTick);
};

function draw(){
	if (playerHitted){
		alert("Game Over!");
		alert("Retry?");
		window.location.reload();
	}else if (Gorg_Hunter.health === 0) {
		alert("You WIN!!!!");
		alert("Beat that badass again?");
		window.location.reload();
	}
	else {
		ctx.clearRect(0, 0, game_area.width, game_area.height);
        if(rigthtPressed && playerX<game_area.width-playerImg.width) {
            playerX += 5;
        }
        else if(leftPressed && playerX>0) {
            playerX -= 5;
        }
        if(downPressed && playerY<game_area.height-playerImg.height) {
            playerY += 5;
        }
        else if(upPressed && playerY>0) {
            playerY -= 5;
        };

    playerBulletHitBox = [playerBullet.X, playerBullet.X+playerBullet.bullet.width, playerBullet.Y, playerBullet.Y+playerBullet.bullet.height];
    bossHitBox = [Gorg_Hunter.X, Gorg_Hunter.X+Gorg_Hunter.img.width ,Gorg_Hunter.Y , Gorg_Hunter.Y+Gorg_Hunter.img.height-100];
    Gorg_Hunter.changeDirection();
    Gorg_Hunter.moveBoss();

    bossHitted = Hit(playerBulletHitBox ,bossHitBox);
    playerBullet.onHit(bossHitted);
    Gorg_Hunter.onHit(bossHitted);
    ctx.drawImage(playerImg, playerX, playerY);
    playerBullet.movePlayerBullet();
    Gorg_Hunter.drawBoss();
    requestAnimationFrame(draw); 
	}
};

draw();
setInterval(createBossBullet,300)
bossTick();