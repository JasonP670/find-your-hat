# find-your-hat


This terminal based game was made using NodeJS. Make sure you have Node installed to be able to play.

- You are the *
- Get to the hat (^)
- Avoid the holes (O)
- ░ are safe playable areas



### How to play

1. Download or clone the files
2. Run npm install
3. In a terminal 'run node' main.js
4. After game over re-run 'node main.js' to replay


At the start of the game you will be asked for a height and a width. Those will be the dimensions of the board. 
To move type a single letter: u for up, d for down, l for left, r for right.
After each move the ░ will be replaced with a * to leave a trail of where you have been. 
You will not be allowed to move off the board. 

* Note: The holes are randomly generated, there's a chance the game in un-winnable. 



### Things I learned:
- How to get input from the player.
- Classes, this whole game is made in a class.
- Really solidified my understanding of JavaScript. 


### Things that can be updated. 
- Improve the number of holes that are generated.
- Make sure that holes are placed so that the game is always winnable.
- After a certain number of moves, more holes start appearing. 
- Terminal doesn't reprint after each move, rather gets refreshed. 
