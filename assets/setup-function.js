var SIZE = 25;
var WIDTH = 20;
var HEIGHT = 20;
var DIMENSIONS = 20;
var field = [];


function setup()
{
    createCanvas(500,500);
    for (var i = 0; i < 400;i++)
    {
        // field.push(new Tile(i % 20, Math.floor(i / 20), "BARRIER"));
        // i++;
        field.push(new Tile(i % 20, Math.floor(i / 20), random(TYPES)));
        // i++;
    }
}

function draw () 
{
    background(51);

    // draw tiles
    
    for (var i = 0;i < field.length; i++)
    {
        field[i].draw();
    }

}