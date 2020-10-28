
var TYPES = ["BARRIER", "OPEN", "BISCUIT", "CHERRY"];

var oneHalf = SIZE / 2;
var oneThird = SIZE / 3;
var oneForth = SIZE / 4;

function Tile(x,y,type) {

    this.x = x;
    this.y = y;
    this.type = type;  //barrier
    

}

Tile.prototype.draw = function() 
{
    

    switch(this.type) {
        case "BARRIER":
            strokeWeight(5);
            stroke(0);
            fill("#0000FF");
            rect(this.x * SIZE, this.y * SIZE, SIZE, SIZE);
            break;

        case "OPEN":
            break;

        case "BISCUIT":
            ellipseMode(CORNER);
            noStroke();
            fill("255");
            ellipse(this.x * SIZE + oneThird, this.y * SIZE + oneThird, oneThird)
            break;

        case "CHERRY":
            ellipseMode(CORNER);
            stroke(255);
            strokeWeight(2);
            fill("#FF2222");
            ellipse(this.x * SIZE + oneForth, this.y * SIZE + oneForth, oneHalf);
            break;

    }
};