var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var highScore = 0;

document.getElementById("highscoreSpan").innerHTML = highScore = parseInt(localStorage.getItem('HighScore:'));
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },600);
}

var checkDead = setInterval(() => {
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