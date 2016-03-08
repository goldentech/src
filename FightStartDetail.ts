// 
//This one is used to handle http-request
//Get the fight information by Post
//

class FightStartDetail extends egret.Sprite {

    public constructor(width,height,result) {
        super();
        //alert(result.name.name2 + " cccccc")
        this.startFight(width,height,result);
    }

    public startFight(width,height,result): void {
        var fightScene = new FightV2(width,height,result);
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
    
    
    private getFightData() {

        var play1 = { life: 2015,damage: 500,attack: 25,defend: 25,dodge: 50,precise: 25 };
        var play2 = { life: 1850,damage: 600,attack: 25,defend: 25,dodge: 50,precise: 25 };

        var life1 = play1.life;
        var life2 = play2.life;


        var damage1 = play1.damage * (100 + play1.attack - play2.defend) / 100;
        var dodge1 = play1.dodge - play2.precise;


        var damage2 = play2.damage * (100 + play2.attack - play1.defend) / 100;
        var dodge2 = play2.dodge - play1.precise;

        if(damage1 <= 0) damage1 = 1;
        if(damage2 <= 0) damage2 = 1;


        var fightProcess = { result: "tie",maxlife1: play1.life,maxlife2:play2.life,process1: [],process2: [] };

        for(var i = 1;i <= 30;i++) {
            var damage = this.countDamage(play1.damage,damage1,dodge2);
            life2 = life2 - damage;

            fightProcess.process1.push({ round: i,damage: damage });
            if(life2 <= 0) {
                fightProcess.result = "You  Win";
                break;
            }

            damage = this.countDamage(play2.damage,damage2,dodge1);
            life1 = life1 - damage;

            fightProcess.process2.push({ round: i,damage: damage });
            if(life1 <= 0) {
                fightProcess.result = "You Lose";
                break;
            }
        }


        return fightProcess;

    }

    private countDamage(basicDamage,attackDamage,dodge) {
        var damage = 0;
        var num: number = Math.floor(Math.random() * 100);
        //alert(num);
        if(num >= 90) {
            damage = basicDamage * 1.5;

        }
        else if(num > dodge) {
            damage = attackDamage;
        }
        else {
            damage = 0;
        }

        return Math.round(damage);
    }

}