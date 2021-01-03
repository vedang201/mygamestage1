
class Game{
    constructor(){

    }
    getMode(){
        var gameModeRef= database.ref('gameMode');
        gameModeRef.on("value",function(data){
            gameMode = data.val();
        })
    }
    update(mode){
        database.ref('/').update({
            gameMode:mode
        })
        
        
    }
    async start(){
        if(gameMode==0){
            userInput.display();
        }
      
    }
    angerMode(){
background("brown");
player = createSprite(200,300,20,20);
sword = createSprite(450,200,20,20);
monster = createSprite(200,200,50,50);
monster.addImage(monsterImage);
monster.scale=0.2;

sword.addImage(swordImage);
sword.scale=0.1;
   

   visible-=5;
   if(keyDown=="UP_ARROW"){
     player.y+=10;
     sword.y+=10;
   }
   sword.x= mouseX;
   sword.y=mouseY;

   if(sword.isTouching(monster)){
     tint(255,visible);
   }
    }

}