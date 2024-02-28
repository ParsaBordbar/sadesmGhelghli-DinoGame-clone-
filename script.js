const character = document.getElementById("character");
const block = document.getElementById("block");

let counter=0;
let highScore = 0;


document.getElementById("highscoreSpan").innerHTML = highScore = parseInt(localStorage.getItem('HighScore:'));

function jump() {
    if (dispatchEvent.classList != "jump") {
        character.classList.add("jump");
        setTimeout(function () {
            character.classList.remove("jump");
        }, 300);
    }
}
document.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.code == 'Space') {
        jump()
    }
});

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(highScore){
        highScore = parseInt(localStorage.getItem('HighScore:'))
    }else{
        highScore = 0
    }

    if(blockLeft<120 == blockLeft >80  && characterTop>400){
        block.style.animation = "none";
        alert("Game Over. You scored: "+ "" + Math.floor(counter/100));
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