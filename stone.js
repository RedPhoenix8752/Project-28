class Stone {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
         
      }
      var option = {
        isStatic = true
    }
      this.body = Bodies.rectangle(x, y, width, height, options,option);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };