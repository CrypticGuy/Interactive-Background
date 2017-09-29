// Project Name: Particle Connect
// Developer: Vasu Goel
// License: MIT
// Date: 8/10/2017


var particleArray = []

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked()
{
    if (particleArray.length < 100)
    {
        particleArray.push(new createParticles(mouseX, mouseY));
    }
}

function setup()
{
    
    createCanvas(windowWidth, windowHeight);
    for(var i = 0 ; i < 70; i++)
    {
        particleArray.push(new createParticles(random(width), random(height)));
    }
}

function draw()
{
    background(20);
    for (var i = 0; i < particleArray.length; i++)
    {
        particleArray[i].move();
        for (var j = i; j < particleArray.length; j++)
        {
            particleArray[i].lineGenerator(particleArray[j].valX(), particleArray[j].valY());
        }
        particleArray[i].display();
        particleArray[i].checkEdges();
    }
    //ellipse(windowWidth/2, windowHeight/2, 100, 100);
}

function createParticles(x, y)
{
    this.angle = random(-1, 1);
    this.x = x;
    this.y = y;
    this.diameter = random(10, 15);
    this.speedX = random(-1.5, 1.5);
    this.speedY = random(-1.5, 1.5);
    this.opacity = random(180, 255);
    this.move = function()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.display = function()
    {
        var d = (sin(this.angle + PI/2) * this.diameter/2) + this.diameter/2;
        fill(255, 255, 255, this.opacity);
        //stroke(255);
        noStroke();
        ellipse(this.x, this.y, d, d);
        this.angle += random(0.01, 0.05);
    }

    this.lineGenerator = function(a, b)
    {
        if (dist(this.x, this.y, mouseX, mouseY) < 127)
        {
            stroke(0, 0, 255, 255 - 2*dist(this.x, this.y, mouseX, mouseY));
            line(this.x, this.y, mouseX, mouseY);
        }
        if (dist(this.x, this.y, a, b) < 127)
        {
            stroke(0, 0, 255, 255 - 2*dist(this.x, this.y, a, b));
            line(this.x, this.y, a, b);
        }
    }

    this.checkEdges = function() 
    {
        if (this.x > (width + this.diameter) || this.x < (0 - this.diameter))
        {
            this.x = width - this.x;
        }
        if (this.y > (height + this.diameter) || this.y < (0 - this.diameter))
        {
            this.y = height- this.y;
        }
    }

    this.valX = function()
    {
        return this.x;
    }
    this.valY = function()
    {
        return this.y;
    }
}
