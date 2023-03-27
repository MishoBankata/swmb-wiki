let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqX = 50;
let sqY = 50;

context.fillStyle = "red";
context.strokeStyle = "yellow";

let heroPosX = Number(0);
let heroPosY = Number(0);

let playable = 0;

let img = new Image();
img.src = "assets/game_assets/frown.png";
img.onload = function(){
	map();
}

let imgGorg = new Image();
imgGorg.src = "assets/game_assets/gorgodon.png";
let imgPant = new Image();
imgPant.src = "assets/game_assets/panther.png";
let imgCent = new Image();
imgCent.src = "assets/game_assets/centipede.png";
let imgLisk = new Image();
imgLisk.src = "assets/game_assets/lisk.png";
let imgCrys = new Image();
imgCrys.src = "assets/game_assets/crystal.png";
let imgStlg = new Image();
imgStlg.src = "assets/game_assets/stalagmites.png";
let imgClif = new Image();
imgClif.src = "assets/game_assets/cliffs.png";
let imgCave = new Image();
imgCave.src = "assets/game_assets/cave.png";
let imgKybr = new Image();
imgKybr.src = "assets/game_assets/kyber.png";

let creatures = [
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]],
	[[0, 0], [0, 0], [0, 0], [0, 0] ,[0, 0], [0, 0], [0, 0]]
];

for(let i = 0; i < canvas.height / sqY; i++) {
	for(let j = 0; j < canvas.width / sqX; j++) {
		creatures[i][j][0] = Math.floor(Math.random() * 100);
	}
}

creatures[Math.floor(Math.random() * 7)][Math.floor(Math.random() * 7)][0] = 101;

while(true){
	if(creatures[0][0][0] == 101 || creatures[0][1][0] == 101 || creatures[1][0][0] == 101 || creatures[1][1][0] == 101) {
		creatures[Math.floor(Math.random() * 7)][Math.floor(Math.random() * 7)][0] = 101;
	} else break;
}

creatures[0][0][0] = 100;

let cave = "enters a cave on Ilum";
let gorg = "is crushed by a giant Gorgodon!";
let pant = "is cut by a angry Asharl Panther";
let cent = "is bitten by a ravenous Razack";
let lisk = "is startled by a puny lisk";
let crys = "discovers a chamber, full of crystals";
let stlg = "discovers a chamber with with sharp stalagtites and stalagmites";
let clif = "discovers a chamber with botomless cliffs";
let kybr = "has found the Kyber Crystal";

function creatureCheck(){
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	if(creatures[i][j][0] <= 1) {
		document.getElementById("imgs").src = "assets/game_assets/gorgodon.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/gorgodon.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + gorg;
		creatures[i][j][1] = 1;
	} else if (creatures[i][j][0] <= 9){
		document.getElementById("imgs").src = "assets/game_assets/panther.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/panther.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + pant;
		creatures[i][j][1] = 9;
	} else if (creatures[i][j][0] <= 23){
		document.getElementById("imgs").src = "assets/game_assets/centipede.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/centipede.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + cent;
		creatures[i][j][1] = 23;
	} else if (creatures[i][j][0] <= 39){
		document.getElementById("imgs").src = "assets/game_assets/lisk.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/lisk.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + lisk;
		creatures[i][j][1] = 39;
	} else if (creatures[i][j][0] <= 59){
		document.getElementById("imgs").src = "assets/game_assets/crystal.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/crystal.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + crys;
		creatures[i][j][1] = 59;
	} else if (creatures[i][j][0] <= 79){
		document.getElementById("imgs").src = "assets/game_assets/stalagmites.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/stalagmites.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + stlg;
		creatures[i][j][1] = 79;
	} else if (creatures[i][j][0] <= 99){
		document.getElementById("imgs").src = "assets/game_assets/cliffs.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/cliffs.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + clif;
		creatures[i][j][1] = 99;
	} else if (creatures[i][j][0] == 100) {
		document.getElementById("imgs").src = "assets/game_assets/cave.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/cave.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + cave;
		creatures[i][j][1] = 100;
	} else {
		document.getElementById("imgs").src = "assets/game_assets/kyber.png";
		document.getElementById("imgsSmall").src = "assets/game_assets/kyber.png";
		document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + kybr;
		creatures[i][j][1] = 101;
	}
}

//        CREATURES 40%
//        0-1 gorgodon 2%
//        2-9 asharl panther 8%
//        10-23 razhak 14%
//        24-39 lisk 16%
//        
//        TERRAIN 60%
//        40-59 crystal caves 20%
//        60-79 stalagmites 20%
//        80-99 cliffs 20%




document.onkeydown = function(e) {
	switch(e.key) {
		case "w":
			up();
			break;
		case "ArrowUp":
			up();
			break;
		case "a":
			left();
			break;
		case "ArrowLeft":
			left();
			break;
		case "s":
			down();
			break;
		case "ArrowDown":
			console.log(e);
			down();
			break;
		case "d":
			right();
			break;
		case "ArrowRight":
			right();
			break;
		default:
			console.log("no current function of this key");
			break;
	}
}



function map() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(imgCave, 0, 0, 50, 50);
	for(let i = 0; i < canvas.height / sqY; i++) {
		for(let j = 0; j < canvas.width / sqX; j++) {
			if(creatures[j][i][1] != 0) {
				switch(creatures[j][i][1]) {
					case 1:
						context.drawImage(imgGorg, sqX * j, sqY * i, 50, 50);
						break;
					case 9:
						context.drawImage(imgPant, sqX * j, sqY * i, 50, 50);
						break;
					case 23:
						context.drawImage(imgCent, sqX * j, sqY * i, 50, 50);
						break;
					case 39:
						context.drawImage(imgLisk, sqX * j, sqY * i, 50, 50);
						break;
					case 59:
						context.drawImage(imgCrys, sqX * j, sqY * i, 50, 50);
						break;
					case 79:
						context.drawImage(imgStlg, sqX * j, sqY * i, 50, 50);
						break;
					case 99:
						context.drawImage(imgClif, sqX * j, sqY * i, 50, 50);
						break;
					case 100:
						context.drawImage(imgCave, sqX * j, sqY * i, 50, 50);
						break;
					case 101:
						context.drawImage(imgKybr, sqX * j, sqY * i, 50, 50);
						img.src = "assets/game_assets/smile.png";
						break;
					default:
						break;
				}
			}
		}
	}
	context.drawImage(img, heroPosX, heroPosY);
	for(let i = 0; i < canvas.height / sqY; i++) {
		for(let j = 0; j < canvas.width / sqX; j++) {
			context.strokeRect(sqX * j, sqY * i, sqX, sqY);
		}
	}
	
}

function up() {
	if(heroPosY == 0 || playable == 0) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	heroPosY -= 50;
	creatureCheck();
	map();
}

function down() {
	if(heroPosY == 300 || playable == 0) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	heroPosY += 50;
	creatureCheck();
	map();
}

function left() {
	if(heroPosX == 0 || playable == 0) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	heroPosX -= 50;
	creatureCheck();
	map();
}

function right() {
	if(heroPosX == 300 || playable == 0) {
		map();
		return;
	}
	let i = Number(heroPosX / 50);
	let j = Number(heroPosY / 50);
	heroPosX += 50;
	creatureCheck();
	map();
}

function change() {
	document.getElementById("arrows").display = "none";
}

let names = [];

function showText() {
	let input = document.getElementById("namesEnter").value;
	if(input == "") {
		names[0] = "Luke";
		names[1] = "Skywalker";
	} else names = input.split(' ');
	
	if(names[1] == undefined) {
		names[1] = "Skywalker";
	}
}
function showName() {
	for(let i = 0; i < names.length; i++){
		console.log(names[i]);
	}
}

function startGame() {
	playable = 1;
	document.getElementById("gameText").innerHTML = names[0] + " " + names[1] + " " + cave;
	document.getElementById("startInput").style.display= "none";
	document.getElementById("gameText").style.display = "block";
	document.getElementById('gameplay').style.display = 'block';
	document.getElementById('intro').style.display = 'none'
}