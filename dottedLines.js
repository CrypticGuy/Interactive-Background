// PROJECT NAME: DOTTED LINES
// AUTHOR: Vasu Goel 
// Github Handle: @CrypticGuy
// License: MIT
// This project can be especially used for backgrounds for different websites

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(40, 40, 255);
}

function draw()
{
	background(10, 10, 80);
	stroke(255);
	translate(width/2, height/2);
    	var a = atan2(mouseY-height/2, mouseX-width/2);
    	resetMatrix();
	
	for (var i = 10; i < width; i += 50)
	{
		for (var j = 10; j < height; j += 50)
		{
			var length = dist(i, j, width/2, height/2)*dist(width/2, height/2, mouseX, mouseY)/6000;
			line(i , j, i + cos(a) * length, j + sin(a) * length);
		}
	}
}
