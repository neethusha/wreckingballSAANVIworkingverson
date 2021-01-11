class Ball {
    constructor(x,y,width,height) { //removed angle
      var options = {
          density :1,  //removed quotes but doesnt really matter
          frictionAir :0.005 //reduced this value further


      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.angle=angle;
      World.add(world, this.body);
    }
    display(){
      //var angle=this.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(0,0, this.width, this.height);
      pop();  //added pop
    }
  };