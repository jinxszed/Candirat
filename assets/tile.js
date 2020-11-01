var SIZE = 25;
var TYPES = ["BARRIER", "OPEN", "BISCUIT", "CHERRY", "GHOST", "PACMAN"];

var oneHalf = SIZE / 2;
var oneThird = SIZE / 3;
var oneForth = SIZE / 4;

function Tile(x,y,type) {

    this.x = x;
    this.y = y;
    this.type = type;  //barrier
    
    this.dX = -1;
    this.dY = -1;
    this.moving = false;

    this.speed = 0.2;

}

Tile.prototype.update = function() 
{
    if (this.moving)
    {
        this.x = lerp(this.x, this.dX, this.speed);
        this.y = lerp(this.y, this.dY, this.speed);
        
        if (this.x == this.dX && this.y == this.dY)
            this.moving = false;
    }
};



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
        case "GHOST":
            break;
        case "PACMAN":
            ellipseMode(CORNER);
            stroke("#FFFF22");
            strokeWeight(10);
            ellipse(this.x * SIZE + oneThird, this.y * SIZE + oneThird, oneThird);
            break;
    }
};

function parseTileType(t)
{
    switch(t) 
    {
        case "0":
            return "BARRIER";
        case "1":
            return "OPEN";
        case "2":
            return "BISCUIT";
        case "3":
            return "CHERRY";
        case "4":
            return "GHOST";
        case "5":
            return "PACMAN";
    }
}

Tile.prototype.move = function(x, y) 
{
    var dY = this.y + y;
    var dX = this.x + x;

    if(this.moving)
        return;

    var destinationTile = field[dY * DIMENSIONS + dX];
    var type = destinationTile.type;

}