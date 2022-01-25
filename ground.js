class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.suelo = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.suelo);
        
    }
      display() {
          var pos = this.suelo.position;
          Matter.Body.rotate(this.suelo,angulo);
          push();
          rectMode(CENTER);
          stroke("red");
          fill("blue");
          translate(pos.x,pos.y);
          rotate(angulo);
          rect(0,0,this.width,this.height);
          pop();
          angulo +=0.1;
      }
}
