
var inputs = readline().split(' ');

const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power

const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

var thorX = initialTx
var thorY = initialTy

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    var directionX = "";
    var directionY = "";

    if (thorX < lightX) {
        directionX = "E"
        thorX ++;
    }
    else if (thorX > lightX) {
        directionX = "W"
        thorX --;
    }

    if (thorY < lightY) {
        directionY = "S"
        thorY ++;
    }
    else if (thorY > lightY) {
        directionY = "N"
        thorY --;
    }

    console.log(directionY + directionX)
    // A single line providing the move to be made: N NE E SE S SW W or NW
}