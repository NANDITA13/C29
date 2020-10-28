class Bird extends BaseClass {
  constructor(x,y){

    super(x,y,50,50);

    Matter.Body.setMass (this.body,this.body.mass*6);
    //this.body.frictionAir = 0.5;
    this.image = loadImage("sprites/bird.png");
  }

}