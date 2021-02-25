class Box{
 constructor(x,y,width,height)
 {
     var a = { 'restitution' : 0.1}
     this.body=Bodies.rectangle(x,y,width,height,a);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
 }
 
 display()
 {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();
}
}