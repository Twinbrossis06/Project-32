class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,150,150);
    this.image = loadImage("sprites/2.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
  
super.display();
  if(this.body.position.x>200 && this.body.velocity.x>10)
  {
    var position =  [this.body.position.x,this.body.position.y];  
    this.trajectory.push(position);
  }

for(var i=0;i<this.trajectory.length;i++){
image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
}

  }
}