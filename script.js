let character = document.getElementById("character");
let block = document.getElementById("block");
let counter=0;
let highScore = 0;


const ctx = document.getElementById("character").getContext("2d");

const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "assets/sR1.png";

document.getElementById("highscoreSpan").innerHTML = highScore = parseInt(localStorage.getItem('HighScore:'));
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },600);
}

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(highScore){
        highScore = parseInt(localStorage.getItem('HighScore:'))
    }else{
        highScore = 0
    }

    if(blockLeft<25 && blockLeft >-100 && characterTop>=120){
        block.style.animation = "none";
        alert("Game Over. score: "+ Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        if (highScore < Math.floor(counter/100)){
            highScore = Math.floor(counter/100)
            localStorage.setItem('HighScore:', JSON.stringify(Math.floor(counter/100)))
            
            document.getElementById("highscoreSpan").innerHTML = highScore;
        }
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);