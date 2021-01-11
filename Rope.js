class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 400, //changed length
      };
  
      this.pointB = pointB; //moved this line to top
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
  
  
    display() {
      
        var pointA = this.rope.bodyA.position;
        console.log(this.rope.bodyA.position); //added these logs for checking
        console.log(this.pointB);//added these logs for checking
        var pointB = this.pointB;
        push();
  
        stroke("black");
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      
    }
  }
  