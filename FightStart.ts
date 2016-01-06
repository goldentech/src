

class FightStart extends egret.Sprite {

    public constructor(width,height) {
        super();

        this.startFight(width,height);
    }






    private startFight(width,height): void {
        var fightScene = new FightV1(width,height);
        var self = this;
        this.addChild(fightScene);
        fightScene.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() 
            { 
                if(fightScene.hits == 1)
                {
                    self.removeChild(fightScene );
                }
                    
            },this);
        

    }

}