class Block
{
    constructor(x, y)
    {
      var options = {
          isStatic: false,
          restitution: 0.6
      }

      this.body = Bodies.rectangle(x , y , 50 ,20 , options);
      this.width  = 50;
      this.height = 20;
      World.add(world , this.body);
    }

    display()
    { 
      var pos = this.body.position;

      fill("red");
      rectMode(CENTER);
      rect(pos.x , pos.y , this.width , this.height);
    }
}