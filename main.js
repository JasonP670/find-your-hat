const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const randomNumber = (num) => {  
  return Math.floor(Math.random() * num)
}

class Field {
  constructor(arr) {
    this._field = arr
    this._userX = 0;
    this._userY = 0;
    this._gameOver = false;
  }

  static generateField(height, width) {
    // Make the field
    let field = [];
    for (let i = 0; i < height; i++) {
      let row = []
      for (let j = 0; j < width; j++) {
        row.push(fieldCharacter)
      }
      field.push(row)
    }
    
    // character always starts at top left
    field[0][0] = pathCharacter;

    // Make sure hat cannot be on the same spot as character
    let notTheSame = true
    while(notTheSame) {
      let h1 = randomNumber(height)
      let h2 = randomNumber(width)
      if (field[h1][h2] !== pathCharacter) {
        field[h1][h2] = hat;
        notTheSame = false
      }
    }

    // Make sure theres a certain number of holes,
    // and that they never land on the hat or character
    let holes = 0;
    while ( holes < height/0.5) {
      let x = randomNumber(height)
      let y = randomNumber(width)
      if (field[x][y] === fieldCharacter) {
        field[x][y] = hole
        holes++
      }
    }

    return field;

  }
  print() {
    // print the field
    let field = ''
    for(let i = 0; i < this._field.length; i++) {
      // each nested array gets added to a string, 
      // and then prints a new line after each line
      field += this._field[i].reduce((a,c) => a + c) + '\n';
    }
    console.log(field)
  }

  get userX() {
    return this._userX;
  }

  set userX(x) {
    this._userX = x;
  }

  get userY() {
    return this._userY;
  }

  set userY(y) {
    this._userY = y;
  }
  
  get gameOver() {
    return this._gameOver;
  }
  
  set gameOver(bool) {
    this._gameOver = bool
  }

  location(x, y) {
      // returns the character at the requested location
      return this._field[x][y];
  }

/**
 * @param {string} direction Specifies which direction char is moving
 * @param {number} nextSpot Specifies what point user tried to land on
 * @return {boolean} If the spot the user tried to land on was on the board
 */
  checkMoveOnBoard(direction, nextSpot) {
    if (direction === 'x') {
      if (nextSpot < 0 || nextSpot > this._field.length - 1) {
        console.log('That move would take you off the board, go another way!')
        return false;
      }
    } else {
      if (nextSpot < 0 || nextSpot > this._field[0].length - 1) {
        console.log('That move would take you off the board, go another way!')
        return false;
      }
    }
    return true;
    
  }
  
  checkGameOver() {
    // if player lands on hole, game over
    // if player lands on hat, wins game
    let symbol = this.location(this.userX, this.userY)
    if (symbol === 'O') {
      console.log('Game Over, you fell in a hole')
      return true;
    } else if (symbol === '^') {
      console.log('Congrats! You found the hat!');
      return true;
    }
    return false;
  }

  changeSymbol() {
    // if valid move, and games not over, the empty space gets replaced with a *
    this._field[this.userX][this.userY] = '*'
  }
  
  move(direction) {
    switch(direction) {
      case 'd':
        // if move is on the board
        if (this.checkMoveOnBoard('x', this.userX + 1)) {
          // change the player location
          this.userX += 1
          // check if game is over, if not change the symbol
          this.checkGameOver() ? this.gameOver = true : this.changeSymbol()
        }
        break;
      case 'r':
        if (this.checkMoveOnBoard('y', this.userY + 1)) {
          this.userY += 1;
          this.checkGameOver() ? this.gameOver = true : this.changeSymbol()
        }
        break;
      case 'l':
        if (this.checkMoveOnBoard('y', this.userY - 1)) {
          this.userY -= 1;
          this.checkGameOver() ? this.gameOver = true : this.changeSymbol()
        };
        break;
      case 'u':
        if (this.checkMoveOnBoard('x', this.userX - 1)) {
          this.userX -= 1;
          this.checkGameOver() ? this.gameOver = true : this.changeSymbol()
        }
        break;
    }
  }
    
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
  ['░', '░', '░']
]);

// while(!myField.gameOver) {
//   myField.print()
//   const move = prompt('Which way?  ');
//   myField.move(move);
// }


let aField = Field.generateField(40, 20)
const anotherField = new Field(aField)
while(!anotherField.gameOver) {
  anotherField.print()
  const move = prompt('Which way?  ');
  anotherField.move(move);
}

