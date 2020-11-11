    class pig{
    constructor(x,y){
        var option={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,25,25,option);
        this.height=25;
        this.width=25;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
};