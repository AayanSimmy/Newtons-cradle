class Bob  {
  constructor(x, y, radius){
    var options = {
      restitution:1.0,
      density:0.5,
      friction:0.5
  }
  this.body = Bodies.circle(x,y,radius,options);
  this.radius= radius;
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  ellipseMode(RADIUS);
  fill("brown");
  circle(pos.x, pos.y, this.radius);
}
};
  


