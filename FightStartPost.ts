// 
//This one is used to handle http-request
//Get the fight information by Post
//

class FightStartPost extends egret.Sprite {

    public constructor() {
        super();
        //ar httpPost: AHttpPostFight = new AHttpPostFight(this.processFight);
        var self = this;
        var httpPost: AHttpPostFight = new AHttpPostFight(function(result) { 
            var fightScene = new FightStartDetail(640,1000,result);
            self.addChild(fightScene);
        });
        
    }


}