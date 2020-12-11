class Ball{

    constructor(x,y,fillCol,staticity){
        var options={
            isStatic: staticity,
            restitution: 0.9,
            friction: 0.5,
            density: 0.1
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.fillCol=fillCol
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){

        var ballPos = this.body.position;
        push();
        translate(ballPos.x, ballPos.y);
        strokeWeight(0);
        fill(this.fillCol)
        ellipse(0,0,this.r,this.r);
        pop();
    }
}   