/* CHALLENGE

VVhat ?!?
None of zese codevarriors seemz to remember hiz ovvn name !
Kould you help ?
*/

/* EXAMPLE

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

// ANSWER

function Warrior(n) {
    let name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}