class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("block.png");
        this.width = width;
        this.height = height;
        this.visblity=255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
       // translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
        if(this.body.speed<=3){
         
        }
        else{
          World.remove(world,this.body);
          push()
          this.visiblity-=5;
          tint(255,this.visiblity)
          image(this.image,pos.x,pos.y,30,40)
          pop()
        }
       
      
      }
}
