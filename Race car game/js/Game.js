class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();

    form = new Form();
    form.display();

    var car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    var car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];    
  }
  
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }


  static getPlayersIfno(){
    var playerInfo = database.ref("Players"); // access the  key element  - gameState of database
    // get the value of the key element
    playerInfo.on("value",data =>{
      allPlayers= data.val();
    });
  }

  play(){
    
    this.handleElements();
      player.getplayersInfo();
      if (allPlayers !== undefined){
        image(track_img, 0, -height*5, width, height *6);
        drawSprites();
      }
  }

  getState(){
    var gameStateRef = database.ref("gameState"); // access the  key element  - gameState of database
    // get the value of the key element
    gameStateRef.on("value",function(data){
      gamesState = data.val();
    });
  }

  update(state){
    // access the main database  as base folder  and then update the value of key element gameState
    database.ref("/").update({
      gameState:state 
    });
  }

}
