class Box
{
    constructor(x,y,width)
    {
        this.x=x
        this.y=y
        this.w=width
  
        var option={
            restitution: 0,
            friction:1,
            density:0.01,
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,width,option);
       
        World.add(world,this.body)
    }

display() {
        var boxPos=this.body.position
        rectMode(CENTER) 
        strokeWeight(1);
        fill("white");
        rect(boxPos.x,boxPos.y,this.w,this.w)
    }
}