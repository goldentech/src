

class FightV1 extends egret.Sprite {

    public constructor(width,height) {
        super();
        this.hits = 0;
        // monster2 blood level
        this.value1 = 100;
        this.value2 = 100;
        this.startFight(width,height);
    }

    

    // hit counter
    public hits: number;
    // monster2 blood level value
    private value1: number;
    private value2: number;
    
    
    
    private startFight(width,height):void {
        this.addChild(this.background(width));
        this.creatMonster();
        //this.getFightData();
    }
    
    
    private getFightData()
    {
        
        var play1 = { life: 1000,damage: 300,attack: 25,defend: 25,dodge: 50,precise:25};
        var play2 = { life: 1000,damage: 300,attack: 25,defend: 25,dodge: 50,precise:25};
        
        var life1 = play1.life;
        var life2 = play2.life;
        
        
        var damage1 = play1.damage * (100 + play1.attack - play2.defend)/100;
        var dodge1 = play1.dodge - play2.precise;
        
        
        var damage2 = play2.damage * (100 + play2.attack - play1.defend)/100;
        var dodge2 = play2.dodge - play1.precise;
        
        if(damage1 <= 0) damage1 = 1;
        if(damage2 <= 0) damage2 = 1;
        
        
        var fightProcess = {result:"tie",process1: [],process2:[]};
        
        for(var i = 1;i <= 30;i++)
        {
            var damage = this.countDamage(play1.damage,damage1,dodge2);
            life2 = life2 - damage;
            
            fightProcess.process1.push({ round: i,damage: damage});
            if(life2 <= 0)
            {
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
        
        //alert(fightProcess.process1.length);
        //alert(fightProcess.process2.length);
        
        
//        var j1 = 0;
//        var j2 = 0;
//        var l1 = 1000;
//        var l2 = 1000;
//        while(1)
//        {
//            
//            if(j1<fightProcess.process1.length)
//            {
//                egret.log("你对对手造成了" + fightProcess.process1[j1].damage  + "点伤害");
//                l2 = l2 - fightProcess.process1[j1].damage;
//                egret.log("对手还剩余" + l2+ "点生命");
//                j1++;
//            }
//            else
//            {
//                egret.log(fightProcess.result);
//                break;
//                
//            }
//            
//            if(j2 < fightProcess.process2.length) {
//                egret.log("对手对你造成了" + fightProcess.process2[j2].damage + "点伤害");
//                l1 = l1 - fightProcess.process2[j2].damage;
//                egret.log("你还剩余" + l1 + "点生命");
//                j2++;
//            }
//            else {
//                egret.log(fightProcess.result);
//                break;
//
//            }
//        }
        
           
        
//        for(var i = 0;i < 10; i ++)
//        {
//            var num: number = Math.floor(Math.random() * 100);
//            egret.log(num);
//        }
        
        return fightProcess;
        
    }
    
    private countDamage(basicDamage,attackDamage,dodge)
    {
        var damage = 0;
        var num: number = Math.floor(Math.random() * 100);
        //alert(num);
        if(num >= 90) {
            damage = basicDamage* 1.5;
            
        }
        else if(num > dodge) {
            damage = attackDamage;
        }
        else {
            damage = 0;
        }
        
        return damage;
    }
    
    // draw a blood level bar
    private drawProcessBar(x: number,y: number,value: number,target: egret.Shape,life: egret.TextField): void {
        //target.graphics.beginFill(0xffffff);
        
        target.graphics.beginFill(0xFFB90F);
        target.graphics.drawRect(x-4,y-3,208,26);
        target.graphics.endFill();
        target.graphics.beginFill(0x8B5A2B);
        target.graphics.drawRect(x ,y ,200,20);
        target.graphics.endFill();
        
        
        
        // show green, yellow, red blood bar
        var color;
        if(value/10 >= 75) {
            color = 0x4CF64D;
        }
        else if(value/10 > 25 && value/10 < 75) {
            color = 0xFFF851;
        }
        else {
            color = 0xFF0017;
        }

        target.graphics.beginFill(color);
        target.graphics.drawRect(x,y,value*2/10,20);
        target.graphics.endFill();

        this.addChild(target);
        
        
        
        life.text = value.toString();
        life.x = x + 80;
        life.y = y - 10;
        
        this.addChild(life);
    }
    
    private background(width)
    {

//        bg.graphics.drawRoundRect(0,250,width,300,width,300);

        
        var bg: egret.Bitmap = new egret.Bitmap(RES.getRes("fightBG"));
        
        bg.x = 0;
        bg.y = 55;
        bg.width = width;
        bg.height = 455;
        return bg;
    }
    
    private backgroundRect(width) {
        //background
        var bg1: egret.Shape = new egret.Shape;
        bg1.graphics.beginFill(0x336699);
        //bg.graphics.drawRect(0,0,width,height);
        bg1.graphics.drawRect(0,250,width,300);
        bg1.graphics.endFill();
        return bg1;
    }
    
    private creatMonster() {
        // add monster2 to scene
        var monster2: egret.Bitmap = new egret.Bitmap(RES.getRes("monster"));
        monster2.x = 375;
        monster2.y = 300;
        this.addChild(monster2);
        
        // addd blood level bar for monster
        var bar1: egret.Shape = new egret.Shape;
        var bar2: egret.Shape = new egret.Shape;
        var life1: egret.TextField = new egret.TextField;
        var life2: egret.TextField = new egret.TextField;
        this.drawProcessBar(75,480,1000,bar1,life1);
        this.drawProcessBar(350,480,1000,bar2,life2);
        
        // add sword to scene
        var sword: egret.Bitmap = new egret.Bitmap(RES.getRes("sword"));
        sword.x = 100;
        sword.y = 300;
        this.addChild(sword);
        
        
        var damage: egret.TextField = new egret.TextField();
        damage.text = "";
        damage.x = 380;
        damage.y = 450;
        damage.alpha = 0; 
        damage.bold = true;
        damage.textColor = 0xCD0000;
        damage.strokeColor = 0xFAEBD7;
        damage.stroke = 2;
        
        
        this.addChild(damage);
        
        
        //   Monster: change alpha filter and size when under attack, sword: move while touching monster
       
        this.touchEnabled = true;
        
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.monsterMove(sword,monster2,bar1,bar2,damage,life1,life2)},this);
        
        //monster2.touchEnabled = true;
        //monster2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.monsterMove(sword,monster2,bar1,bar2,damage,life1,life2)},this);
        
    }
    
   
    
    public monsterMove(sword,monster2,bar1,bar2,damage: egret.TextField,life1,life2)
    {
        
        if(this.hits == 1)
        {
            return;
        }
        this.touchEnabled = false;
        
        var fightProcess = this.getFightData();
        
        
        var j = 0;
        
        var l1 = 1000;
        var l2 = 1000;
        

        
        var self = this;
        var lifeList1 = [];
        var lifeList2 = [];
        var damageList1 = [];
        var damageList2 = [];
        
        var win = true; 
        
        while(1) {
            
            if(j < fightProcess.process1.length) {
                //egret.log("你对对手造成了" + fightProcess.process1[j].damage + "点伤害");
                
                l2 = l2 - fightProcess.process1[j].damage;
                if(l2 < 0) l2 = 0;
                var tempL2 = l2;
                lifeList2.push(tempL2);
                damageList2.push(fightProcess.process1[j].damage);
                
                egret.Tween.get(sword).wait(900 * 2 * j).to({ x: 375,y: 300,rotation: 0 },30).call(
                    function() 
                    {
                        var damageMount = damageList2.shift();
                        if(damageMount == 0)
                        {
                            damage.text = " 闪 避 "
                        }
                        else if(damageMount == 450)
                        {
                            damage.text = "爆击 " + damageMount;
                        }
                        else
                        {
                            damage.text = " - " + damageMount;
                        }
                        egret.Tween.get(damage).to({ x: 380,y: 250,scaleX: 1.5,scaleY: 1.5,alpha: 1,rotation: 0 },700).to({ x: 110,y: 450,scaleX: 1.0,scaleY: 1.0,alpha: 0,rotation: 0 },0);
                        
                        self.drawProcessBar(350,480,lifeList2.shift(),bar2,life2) 
                    }
                ).to({ x: 100,y: 300,rotation: 0 },700);
                
                
               
                
                //egret.log("对手还剩余" + l2 + "点生命");
             
            }
            else {
                //egret.log(fightProcess.result);
                win = false;
                break;

            }

            if(j < fightProcess.process2.length) {
                //egret.log("对手对你造成了" + fightProcess.process2[j].damage + "点伤害");
                
                l1 = l1 - fightProcess.process2[j].damage;
                if(l1 < 0) l1 = 0;
                
                var tempL1 = l1;
                lifeList1.push(tempL1);
                damageList1.push(fightProcess.process2[j].damage);
                egret.Tween.get(monster2).wait(900 * (2 * j + 1)).to({ x: 100,y: 300,rotation: 0 },30).call(
                    function() 
                    { 
                        
                        var damageMount = damageList1.shift();
                        if(damageMount == 0) {
                            damage.text = " 闪 避 "
                        }
                        else if(damageMount == 450) {
                            damage.text = "爆击 " + damageMount;
                        }
                        else {
                            damage.text = " - " + damageMount;
                        }
                        egret.Tween.get(damage).to({ x: 110,y: 250,scaleX: 1.5,scaleY: 1.5,alpha: 1,rotation: 0 },700).to({ x: 380,y: 450,scaleX: 1.0,scaleY: 1.0,alpha: 0,rotation: 0 },0);
                        
                        
                        self.drawProcessBar(75,480,lifeList1.shift(),bar1,life1); 
                    }
                ).to({ x: 375,y: 300,rotation: 0 },700);
                
                //egret.log("你还剩余" + l1 + "点生命");
                
             
                
                
                
            }
            else {
                //egret.log(fightProcess.result);
                win = true;
                break;

            }
            
            j++;
            
            
        }
       
        var fightResult: egret.TextField = new egret.TextField();
        fightResult.text = fightProcess.result;
        
        fightResult.x = 245;
        fightResult.y = 450;
        fightResult.alpha = 0;
        fightResult.bold = true;
        
        fightResult.strokeColor = 0x0D0D0D;
        fightResult.stroke = 0.5;
        this.addChild(fightResult);
//        damage.text = fightProcess.result;
        var delay;
        if(win)
        {
            fightResult.textColor = 0xFFD700;
            delay = 1;
        }
        else
        {
            fightResult.textColor = 0x9E9E9E;
            delay = 0;
        }
        
        egret.Tween.get(fightResult).wait(900 * (2 * j + delay)).to({ x: 120,y: 150,scaleX: 3.0,scaleY: 3.0,alpha: 1,rotation: 0 },700);
      
        egret.Tween.get(this).wait(900 * (2 * j + delay)).to({ touchEnabled: true },0).call(function() { self.hits = 1;})
//        
        
        //egret.Tween.get(damage).to({ x: 375,y: 300,rotation: 0 },30).to({ x: 100,y: 300,rotation: 0 },350);
        
        //egret.Tween.get(sword).to({ x: 375,y: 300,rotation: 0 },30).to({ x: 100,y: 300,rotation: 0 },350);
        
//        this.hits++;
//        // adjust blood level
//        this.value2 = this.value2 - 25;
        
        
                
        // when hits equal to 4, monster disappear
//        if(this.hits == 4) {
//            this.hits = 0;
//            // remove child and clean up
//            this.removeChild(monster2);
//            this.removeChild(bar2);
//            this.removeChild(life2);
//            return;
//        }
//        egret.Tween.get(monster2).to({ scaleX: .95,scaleY: .95,alpha: .2 },250,egret.Ease.circIn).to({ scaleX: 1,scaleY: 1,alpha: 1 },250,egret.Ease.circIn);
    }
   
}
