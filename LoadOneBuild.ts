

class LoadOneBuild extends egret.Sprite {

    public constructor(positon, x, y ,sourceName,buildName) {
        super();
        this.createBuild(positon,x,y,sourceName,buildName);
    }

    private house:egret.Bitmap;
    private houseName:egret.TextField;

    private createBuild(position,x,y,sourceName,buildName):void {
        
        
    
        
        
        this.house = new egret.Bitmap(RES.getRes(sourceName));
//        this.house.x = x; this.house.y = y; this.house.scaleX = 0.5; this.house.scaleY = 0.5; this.house.name = "house"+position;
        
        this.house.x = x; this.house.y = y; this.house.width = 140; this.house.height = 220; this.house.name = "house" + position;
        this.house.touchEnabled = true;
        this.house.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        
        this.addChild(this.house);
        
        
        this.houseName = new egret.TextField;
        this.houseName.text = buildName; this.houseName.x = x + 30; this.houseName.y = y + 235; this.houseName.name = "houseName"+position;
        this.addChild(this.houseName);
    }
    
    private touchHandler(evt:egret.TouchEvent):void
    {
       
                                
                
       
    }
    
    


}
