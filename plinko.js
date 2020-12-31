class Plinko {
    constructor(x,y){
     var options={
         isStatic: true,
         density: 1.2,
         friction: 0.04,
         restitution: 0
     }
     this.x=x;
     this.y=y;
     this.body=Bodies.circle(x,y,10,options);
     World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipseMode(radius);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}