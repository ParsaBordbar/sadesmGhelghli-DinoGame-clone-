Jumping Game
This is a simple jumping game created using HTML, CSS, and JavaScript. The objective of the game is to make the character jump and avoid colliding with the block.

Getting Started
To get started with the game, you can clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/jumping-game.git
Once you have cloned the repository, you can open the index.html file in your web browser to start playing the game.

How to Play
To make the character jump, you can press the space bar on your keyboard. The character will jump over the block and you will earn points.

The game keeps track of your high score and displays it on the screen. If you collide with the block, the game will display your score and reset the game.

Game Logic
The game uses JavaScript to handle the game logic. Here is a brief explanation of the code:

The jump() function is called when the space bar is pressed. It adds a "jump" class to the character element, which applies a CSS animation to make the character jump.
The checkDead function is called every 10 milliseconds to check if the character has collided with the block. It uses the getComputedStyle() function to get the top position of the character and the left position of the block.
If the character collides with the block, the function displays an alert message with the score and resets the game.
If the character does not collide with the block, the function increments the score and updates the high score if necessary.
High Score
The game stores the high score in the local storage using the localStorage.setItem() function. The high score is displayed on the screen using the innerHTML property.

