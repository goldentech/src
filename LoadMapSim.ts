

class LoadMapSim extends egret.Sprite {

    public constructor(simWidth,simHeight) {
        super();
        
        this.touchHouse = "h0";
        
        this.createSimMap(simWidth,simHeight);
    }

    public touchHouse ;
    private states;
    private chatStates;
    private moveName = new egret.TextField;
    private chatName = new egret.TextField;
    
    private chat; 
    
    
    private createSimMap(simWidth,simHeight):void {
        var bg: LoadBackGround = new LoadBackGround(simWidth,simHeight,"bgImage",false);
        this.addChild(bg);
                   
        
        this.chat = new ChatSocketNoBG(simWidth,simHeight);
//        var storyBar: LoadStroyBar = new LoadStroyBar(60,120,1,0);
//        this.addChild(storyBar);
        this.states = 0;
        this.chatStates = 0;
        
        this.addMoveButton();
        
            
        
    }
    
    private addMoveButton()
    {
        var monster2: egret.Bitmap = new egret.Bitmap(RES.getRes("sword"));
        monster2.x = 0;
        monster2.y = 0;
        this.addChild(monster2);
        
        this.moveName= new egret.TextField;
        this.moveName.text = "移 动"; this.moveName.x = 35; this.moveName.y = 160; 
        this.moveName.size = 32; 
        this.moveName.textColor = 0xFF4040;
        this.moveName.bold = true;
        this.addChild(this.moveName);
        
        monster2.touchEnabled = true;
      
        monster2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.changeStates()},this);
        
        this.moveName.touchEnabled = true;
        this.moveName.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.changeStates() },this);
    }
    
    private changeStates()
    {
        if(this.states == 0)
        {
           
            this.addChatButton();
            this.addAllLocation();
            this.states = 1;
            this.moveName.text = "驻 足";
           
        }
        else
        {
            this.removeChatButton();  
            if(this.chatStates == 0)
            {
                this.removeAllLocation();
            }
            else
            {
                this.chatStates = 0;
                this.removeChild(this.chat);
            }
            this.states = 0;
            this.moveName.text = "移 动";
        }
    }
    
    private addChatButton() {
        var monster: egret.Bitmap = new egret.Bitmap(RES.getRes("monster"));
        monster.x = 400;
        
        monster.y = 0;
        monster.name = "chatButton";
        this.addChild(monster);

        this.chatName = new egret.TextField;
        this.chatName.text = "聊 天"; this.chatName.x = 450; this.chatName .y = 160;
        this.chatName.size = 32;
        this.chatName.textColor = 0xFF4040;
        this.chatName.bold = true;
        this.addChild(this.chatName );
        
        
        monster.touchEnabled = true;
        monster.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.changeChatStates() },this);
        this.chatName.touchEnabled = true;
        this.chatName.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.changeChatStates() },this);
    }
    
    
    private changeChatStates() {
        if(this.chatStates == 0) {

            this.removeAllLocation();   
            this.addChild(this.chat);
            this.chatStates = 1;
            this.chatName.text = "移 动";

        }
        else {
            this.removeChild(this.chat);
            this.addAllLocation();
            this.chatStates = 0;
            this.chatName.text = "聊 天";
        }
    }
    
    
    private removeChatButton()
    {
        this.removeChild(this.getChildByName("chatButton"));
        this.removeChild(this.chatName);
    }
    
    
    private addAllLocation()
    {
        var sims= new MapSimData().getSixSims();
        
//        { position: 1,x: x,y: y,sourceName: "sim1",buildName: "练武场" }
        
        for(var i = 0;i < sims.sims.length; i ++)
        {
             var s = sims.sims[i]
             
             var house1: LoadOneBuild = new LoadOneBuild(s.position,s.x,s.y,s.sourceName,s.buildName);
             house1.name = "h" + s.position;
             house1.touchEnabled = true;
             house1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
             this.addChild(house1);
        }
        
       
    }
    
    private removeAllLocation() {
        for(var i = 1;i <= 6;i++)
        {
                this.removeChild(this.getChildByName("h"+i));
        }
    }
    
    private touchHandler(evt:egret.TouchEvent):void
    {
        var currentHouse: LoadOneBuild = evt.currentTarget;
        this.touchHouse = currentHouse.name;
        
    }
    
   


}
