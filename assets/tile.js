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
            stroke("#0000FF");
            fill(0);
            rect(this.x * SIZE, this.y * SIZE, SIZE, SIZE);
            break;

        case "OPEN":
            break;

        case "BISCUIT":
            break;

        case "CHERRY":
            break;

    }
};