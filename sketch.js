function setup(){createCanvas(400,400)
                box = createSprite(150,150,20,20);}

function draw(){
  background('black')
  if(mousePressedOver(box)){
    console.log("Dont click on the Box")
    fill("white");
    textSize(20);
    text("Dont click on the Box",100,100);
  }
  if(touches.length >0){
    for(var i=0;i<touches.length;i++){
      if(touches[i][0] == box.x &&touches[i][1] == box.y){
        console.log("true")
        text("Dont touch the Box",100,100);
        fill("white");
    textSize(20);
      }
      else
        {
          console.log("false")
        }
        
    }
  }
  drawSprites();
}
