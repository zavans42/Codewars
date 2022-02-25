/* CHALLENGE

Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
*/

/* EXAMPLE

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// ANSWER

class Ghost {
    constructor() {
        this.calar = function () {

            let caloar = Math.floor(Math.random() * 4)
            if (caloar === 0) {
                return 'white'
            }
            if (caloar === 1) {
                return 'yellow'
            }
            if (caloar === 2) {
                return 'purple'
            }
            if (caloar === 3) {
                return 'red'
            }
        }
        this.color = this.calar()
    }
}

let ghost = new Ghost();