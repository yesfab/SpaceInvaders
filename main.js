const jeu = document.querySelector(".jeu");
let width = 20;
let height = 20;
let shooting = false;
let score = 0;
let highscore = 0;
let highScore = localStorage.getItem("highscore");
document.querySelector(".highscore").textContent = highScore;

let soundBullet = new Audio();
soundBullet.src = "/ressources/Pewsoundeffect.mp3";

let soundDeath = new Audio();
soundDeath.src = "/ressources/boom.mp3";

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

const bullets = []

function draw(){
    for(let i = 0; i < aliens.length; i++){
        carres[aliens[i]].classList.add("invader")
    }
}


let posShooter = 389;
let posBullet = posShooter;

carres[posShooter].classList.add("shooter")

draw()


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
                    
                }, 100);
                soundBullet.cloneNode().play();
                shootBullets();
            }
            
        break;
    }
});

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

function bougerAliens() {
    
    if (direction === "right") {
        bougerAliensDroite();
        if (aliens.some(alien => (alien + 1) % width === 0)) {
            direction = "left";
            setTimeout(() => {
                bougerAliensDown();
            }, 400);
        }

    } else {
        bougerAliensGauche();
        if (aliens.some(alien => alien % width === 0)) {
            direction = "right";
            setTimeout(() => {
                bougerAliensDown();
            }, 400);
        }
    }
}

let aliensId = setInterval(bougerAliens, 800);

/*
function updateScore(){
    let scoreId = document.getElementById("score");
    //score = localStorage.getItem("score");
    document.querySelector(".score").textContent = score;
    highscore = localStorage.getItem("score") || 0;
    //scoreId.innerText = "Score: " + score;
}

function updateHighScore(){
    highscore = score;
    //let highScoreId = document.getElementById("highscore");
    document.querySelector(".highscore").textContent = highscore;
    //highScoreId.innerText = "High Score: " + highscore;
}*/

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
            //updateScore();
            document.querySelector(".score").textContent = score;
            
        }

    }
    let bulletId = setInterval(moveBullets, 200);
}

function saveHighScore(highscore){
    localStorage.setItem("highscore", highscore)
}

let audioOnce = 0;
function victoire(){
    if(aliens.length == 0){
        if(audioOnce == 0){

            
            let SoundGame = new Audio();
            SoundGame.src = "/ressources/Never_gonna_Meow_you_up.mp3";
            SoundGame.play();
            document.getElementsByClassName("jeu")[0].style.display = "none" //en wrap de base
            document.getElementById("victoire").style.display = "block";

            if (score > highscore) {
                highscore = score;
                localStorage.setItem("highscore", highscore);
                document.querySelector(".highscore").textContent = highscore;
                //saveHighScore();
                
            }


        }
        audioOnce++;

    }
}

document.getElementById("restartGame").addEventListener("click", ()=>{
    location.reload();
});


setInterval(() => {
    victoire();
}, 100);