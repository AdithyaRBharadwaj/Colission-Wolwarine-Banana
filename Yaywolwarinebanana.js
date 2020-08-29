function collision(rectA,rectB){
    if(rectA.x - rectB.x < rectA.width/2+rectB.width/2
      &&  rectB.x - rectA.x < rectA.width/2+rectB.width/2
         && rectA.y- rectB.y < rectA.height/2+rectB.height/2
         && rectB.y - rectA.y < rectA.width/2+rectB.height/2){
    
       return true;
  
      }
      else{
      return false;
      }
  }