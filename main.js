//EASY MODE==================================================================================================================
document.getElementById("ez").addEventListener("click", ()=>{

    document.addEventListener("keydown", function(event) {
        switch(event.code){
            case "ArrowLeft":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width !==0) posShooter -=1
                carres[posShooter].classList.add("shooter")
                break;
            
            case "ArrowRight":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width < width -1) posShooter +=1
                carres[posShooter].classList.add("shooter")
                break;

            case "ArrowUp":
                carres[posShooter].classList.remove("shooter")
                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20 //360
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite 500
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });

    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 300);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 300);//augmente le temps pour plus de facilite
        }
    }
}

setInterval(bougerAliens, 600);//augmente le temps pour plus de facilite

function aliensTire(){
    let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];
    let alienShootChoice = Math.floor(Math.random() * 3);

    if(alienShootChoice == 0){
        if(!shootingAliens){

            shootingAliens = true;
            setTimeout(function () {
                shootingAliens = false;
                
            }, 300); //reduit le temps pour plus de difficulte 
            var posBulletAlien = selectedAlien;

        }        
    }

    function bulletAlienMove(){
        carres[posBulletAlien].classList.remove("bulletAliens")
        posBulletAlien += 20;
        if (posBulletAlien<0){
            clearInterval(bulletAlienId);
        }
        carres[posBulletAlien].classList.add("bulletAliens")

        if(carres[posBulletAlien].classList.contains("shooter")){            
            window.location.href="game_over.html";
        }
    }
    let bulletAlienId = setInterval(bulletAlienMove, 200);
}

setInterval(() => {
    victoireEz();
    gameOverEz();
}, 100);

document.getElementsByClassName("decorButton")[0].style.display = "none";
document.getElementsByClassName("decorButton")[1].style.display = "none";
document.getElementsByClassName("decorButton")[2].style.display = "none";

musiqueBackground.loop = true;
musiqueBackground.play();
});

//MEDIUM MODE================================================================================================================
document.getElementById("medium").addEventListener("click", ()=>{

    document.addEventListener("keydown", function(event) {
        switch(event.code){
            case "ArrowLeft":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width !==0) posShooter -=1
                carres[posShooter].classList.add("shooter")
                break;
            
            case "ArrowRight":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width < width -1) posShooter +=1
                carres[posShooter].classList.add("shooter")
                break;

            case "ArrowUp":
                carres[posShooter].classList.remove("shooter")
                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });

    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 200);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 200);//augmente le temps pour plus de facilite
        }
    }
}

setInterval(bougerAliens, 400);//augmente le temps pour plus de facilite

function aliensTire(){
    let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];
    let alienShootChoice = Math.floor(Math.random() * 3);

    if(alienShootChoice == 0){
        if(!shootingAliens){

            shootingAliens = true;
            setTimeout(function () {
                shootingAliens = false;
                
            }, 300); //reduit le temps pour plus de difficulte 
            var posBulletAlien = selectedAlien;

        }        
    }

    function bulletAlienMove(){
        carres[posBulletAlien].classList.remove("bulletAliens")
        posBulletAlien += 20;
        if (posBulletAlien<0){
            clearInterval(bulletAlienId);
        }
        carres[posBulletAlien].classList.add("bulletAliens")

        if(carres[posBulletAlien].classList.contains("shooter")){            
            window.location.href="game_over.html";
        }
    }
    let bulletAlienId = setInterval(bulletAlienMove, 200);
}

setInterval(() => {
    victoireM();
    aliensTire();
    gameOverM();
}, 100);

document.getElementsByClassName("decorButton")[0].style.display = "none";
document.getElementsByClassName("decorButton")[1].style.display = "none";
document.getElementsByClassName("decorButton")[2].style.display = "none";

musiqueBackground.loop = true;
musiqueBackground.play();
});


//HARD MODE==================================================================================================================
document.getElementById("hard").addEventListener("click", ()=>{

    document.addEventListener("keydown", function(event) {
        switch(event.code){
            case "ArrowLeft":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width !==0) posShooter -=1
                carres[posShooter].classList.add("shooter")
                break;
            
            case "ArrowRight":
                carres[posShooter].classList.remove("shooter")
                if (posShooter % width < width -1) posShooter +=1
                carres[posShooter].classList.add("shooter")
                break;

            case "ArrowUp":
                carres[posShooter].classList.remove("shooter")
                if (posShooter - height >= 0 && posShooter > 360) posShooter -= 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "ArrowDown":
                carres[posShooter].classList.remove("shooter")
                if (posShooter + height < height * height) posShooter += 20
                carres[posShooter].classList.add("shooter")
                break;
    
            case "Space":
                if(!shooting){
                    shooting = true;
                    setTimeout(function () {
                        shooting = false;
                        
                    }, 500);//reduit le temps pour plus de facilite
                    soundBullet.cloneNode().play();
                    shootBullets();
                }
                
            break;
        }
    });

    function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 125);//augmente le temps pour plus de facilite
        }

    } else {
        bougerAliensGauche();
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 125);//augmente le temps pour plus de facilite
        }
    }
}

setInterval(bougerAliens, 250);//augmente le temps pour plus de facilite

function aliensTire(){
    let selectedAlien = aliens[Math.floor(Math.random()*aliens.length)];

        if(!shootingAliens){

        shootingAliens = true;
        setTimeout(function () {
            shootingAliens = false;
            
        }, 100); //reduit le temps pour plus de difficulte 
        var posBulletAlien = selectedAlien;

        }        
    

    function bulletAlienMove(){
        carres[posBulletAlien].classList.remove("bulletAliens")
        posBulletAlien += 20;
        if (posBulletAlien<0){
            clearInterval(bulletAlienId);
        }
        carres[posBulletAlien].classList.add("bulletAliens")

        if(carres[posBulletAlien].classList.contains("shooter")){            
            window.location.href="game_over.html";
        }
    }
    let bulletAlienId = setInterval(bulletAlienMove, 200);
}

setInterval(() => {
    victoireH();
    aliensTire();
    gameOverH();
}, 100);

document.getElementsByClassName("decorButton")[0].style.display = "none";
document.getElementsByClassName("decorButton")[1].style.display = "none";
document.getElementsByClassName("decorButton")[2].style.display = "none";

musiqueBackground.loop = true;
musiqueBackground.play();
});

//===========================================================================================================================


const jeu = document.querySelector(".jeu");
let width = 20;
let height = 20;
let shooting = false;
let shootingAliens = false;
let score = 0;
let highscoreEz = 0;
let highscoreM = 0;
let highscoreH = 0;
//let highScore = localStorage.getItem("highscore");
//document.querySelector(".highscore").textContent = highScore;
let highScoreEz = localStorage.getItem("highscoreEz");
document.querySelector(".highscoreEz").textContent = highScoreEz;
let highScoreM = localStorage.getItem("highscoreM");
document.querySelector(".highscoreM").textContent = highScoreM;
let highScoreH = localStorage.getItem("highscoreH");
document.querySelector(".highscoreH").textContent = highScoreH;

let SoundGame = new Audio();
SoundGame.src = "/ressources/Never_gonna_Meow_you_up.mp3";

let soundBullet = new Audio();
soundBullet.src = "/ressources/Pewsoundeffect.mp3";

let soundDeath = new Audio();
soundDeath.src = "/ressources/boom.mp3";

let musiqueBackground = new Audio();
musiqueBackground.src = "/ressources/MusiqueArrierePlan.mp3";


for(let i = 0; i < 400; i++){
    const carre = document.createElement("div");
    jeu.appendChild(carre)
}

const carres = Array.from(document.querySelectorAll(".jeu div"))

let aliens = [
    0,1,2,3,4,5,6,7,8,9,10,11,
    20,21,22,23,24,25,26,27,28,29,30,31,
    40,41,42,43,44,45,46,47,48,49,50,51
]

let alienLimits = [399,398,397,396,395,394,393,392,391,390,389,388,387,386,385,384,383,382,381,380]

function createAlienLimits(){
    for(let i = 0; i < alienLimits.length; i++){
        carres[alienLimits[i]].classList.add("limits")
    }
}

function draw(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.add("invader")
    }
}

let posShooter = 389;
let posBullet = posShooter;

carres[posShooter].classList.add("shooter")

draw()
createAlienLimits()

function detectInvadLimit(){
    for(let i = 0; i < aliens.length; i++){
        if(carres[aliens[i]].classList.contains("limits")){
            return true;
        }
    }
    return false;
}

function deleteInvaders(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.remove("invader")
    }
}


function bougerAliensDroite(){
    deleteInvaders()
    

    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 1;
        carres[aliens[i]].classList.add("invader");
    }
}

function bougerAliensGauche(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] -= 1;
        carres[aliens[i]].classList.add("invader");
    }
}

function bougerAliensDown(){
    deleteInvaders()

    for(let i = 0; i < aliens.length; i++){
        aliens[i] += 20;
        carres[aliens[i]].classList.add("invader");
    }
}


let direction = "right";


function shootBullets(){
    let posBullet = posShooter;
    function moveBullets(){
        carres[posBullet].classList.remove("bullet");
        posBullet -= 20;
        if (posBullet<0){
            clearInterval(bulletId);
        }
        carres[posBullet].classList.add("bullet");

        if(carres[posBullet].classList.contains("invader")){
            carres[posBullet].classList.remove("invader");
            
            let index = aliens.indexOf(posBullet);
            aliens.splice(index, 1);

            carres[posBullet].classList.remove("bullet");
            carres[posBullet].classList.add("boom");
            soundDeath.cloneNode().play();

            setTimeout(()=> carres[posBullet].classList.remove('boom'), 300);
            clearInterval(bulletId);

            score += 100;
            document.querySelector(".score").textContent = score;
        }

    }
    let bulletId = setInterval(moveBullets, 200);
}

let audioOnce = 0;
function victoireEz(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreEz) {
                highscoreEz = score;
                localStorage.setItem("highscoreEz", highscoreEz);
                document.querySelector(".highscoreEz").textContent = highscoreEz;
            }
        }
        audioOnce++;
    }
}
function victoireM(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreM) {
                highscoreM = score;
                localStorage.setItem("highscoreM", highscoreM);
                document.querySelector(".highscoreM").textContent = highscoreM;
                
            }
        }
        audioOnce++;
    }
}
function victoireH(){
    if(aliens.length == 0){
        musiqueBackground.pause();
        if(audioOnce == 0){
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";
            SoundGame.play()

            if (score > highscoreH) {
                highscoreH = score;
                localStorage.setItem("highscoreH", highscoreH);
                document.querySelector(".highscoreH").textContent = highscoreH;
                
            }
        }
        audioOnce++;
    }
}

document.getElementById("restartGame").addEventListener("click", ()=>{
    location.reload();
});


function gameOverEz(){
    if(carres[posShooter].classList.contains("invader")){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreEz) {
            highscoreEz = score;
            localStorage.setItem("highscoreEz", highscoreEz);
            document.querySelector(".highscoreEz").textContent = highscoreEz;

        }
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreEz) {
            highscoreEz = score;
            localStorage.setItem("highscoreEz", highscoreEz);
            document.querySelector(".highscoreEz").textContent = highscoreEz;
            
        }
    }

}
function gameOverM(){
    if(carres[posShooter].classList.contains("invader")){
        
        musiqueBackground.pause();

        if (score > highscoreM){
            highscoreM = score;
            localStorage.setItem("highscoreM", highscoreM);
            document.querySelector(".highscoreM").textContent = highscoreM;

        }
        window.location.href="game_over.html";
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreM){
            highscoreM = score;
            localStorage.setItem("highscoreM", highscoreM);
            document.querySelector(".highscoreM").textContent = highscoreM;
            
        }
        window.location.href="game_over.html";
    }

}
function gameOverH(){
    if(carres[posShooter].classList.contains("invader")){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreH) {
            highscoreH = score;
            localStorage.setItem("highscoreH", highscoreH);
            document.querySelector(".highscoreH").textContent = highscoreH;
        }
    }

    if(detectInvadLimit() == true){
        window.location.href="game_over.html";
        musiqueBackground.pause();

        if (score > highscoreH) {
            highscoreH = score;
            localStorage.setItem("highscoreH", highscoreH);
            document.querySelector(".highscoreH").textContent = highscoreH;
        }
    }

}