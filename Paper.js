class Paper  {
constructor (x,y, RADIUS ){
    var options={
        isStatic:false,
        restitutio:0.3,
        friction:0.5,
        density:1.2

    }

    this.body = Bodies.circle(x,y,RADIUS, options);
    this.RADIUS = RADIUS;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position; 
    
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x,pos.y,this.RADIUS);
   

}

}