class Player {
  constructor() {

    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

 

  addPlayer(){
    var PlayerIndex =  "Players/player" +this.index; 

    // = assign value e.g. x=3 3 is thevalue of x
    //== compare x==3 it willcompare   is value of the x equals to 3 ??
    // === compare the value along with the  (data types)type of the value 
    // x = "3" if ( x === 3) -- false  
    // x = 3 if (x===3)  true

     if (this.index ===  1){
       this.positionX = width/2 -100; // dividing the track and position to the left of the center
     } else{
       this.positionX = width/2 +100; // dividing the track and position to the right of the center
      
     }
     database.ref(PlayerIndex).set({
       name : this.name,
       positionX : this.positionX,
       positionY : this.positionY
     });
     

  }


  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }
  
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
}
