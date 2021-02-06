class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        var options={bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:xOffset,y:yOffset},
            length:10,
            stiffness:0.5}
this.rope=Matter.Constraint.create(options)
this.xOffset=xOffset
this.yOffset=yOffset
World.add(world,this.rope)
}
display(){
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x +this.xOffset,this.rope.bodyB.position.y+this.yOffset);

}

}

