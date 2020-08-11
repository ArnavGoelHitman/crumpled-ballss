class Dustbin extends BaseClass {
  constructor() {
    
    var options =  {
      isStatic: true,

    }
    super(200,600,100,options);
    this.body = Bodies.rectangle(200,600,400,options)
    World.add(world,this.body);
    
   
    this.image = loadImage("images/dustbingreen.png")
   
   
  }
 display(){
  var pos =this.body.position;
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
  fill("purple");
  
  
   imageMode(CENTER);
   
  image(this.image,0,0,this.radius,this.radius);
  pop()
  super.display();
 }
  
  }

