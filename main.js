const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(arr) {
    this._field = arr
    this._hatFound = false
    this.fellInHole = false
    this._userX = 0;
    this._userY = 0;
  }

  print() {
    let field = ''
    for(let i = 0; i < this._field.length; i++) {
      field += this._field[i].reduce((a,c) => a + c) + '\n';
    }
    console.log(field)
  }

  get hatFound() {
    return this._hatFound
  }
  set hatFound(bool) {
    this._hatFound = bool
  }
  get userX() {
    return this._userX
  }
  set userX(num) {
    try {
      if (typeof num === 'number') {
      this._userX = num;
      } else {
        throw new Error('Please enter a number')
      }
    } catch(e) {
      console.log(e.message)
    }
  }

  get userY() {
    
  }

    
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

let x = myField.userX;
let y = myField.userY;
myField.userX = myField.userX + 'this';
x = myField.userX;

console.log(myField._field[1][y])

