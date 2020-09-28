class Block{
    constructor(x, y) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      this.width = 40;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 7) {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
      } else {
        push();
        World.remove(world, this.body);
        this.Visibility = this.Visibility - 2;
        tint(255, this.Visibility);
        pop();
      }
    }
  };