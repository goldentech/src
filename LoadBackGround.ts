

class LoadBackGround extends egret.Sprite {

    public constructor(simWidth,simHeight,sourceName,ifDetail) {
        super();
        this.createBackGround(simWidth,simHeight,sourceName,ifDetail);
    }

    private bg:egret.Bitmap;
    private infoBar:egret.TextField;

    private createBackGround(simWidth,simHeight,sourceName,ifDetail):void {
        
        this.bg = new egret.Bitmap(RES.getRes(sourceName));
        this.bg.x = 0; this.bg.y = 0; this.bg.width = simWidth; this.bg.height = simHeight;
        //this.bg.touchEnabled;
        this.addChild(this.bg);
        
        
//        this.houseName = new egret.TextField;
//        this.houseName.text = buildName; this.houseName.x = x + 30; this.houseName.y = y + 125; this.houseName.name = "houseName"+position;
//        this.addChild(this.houseName);
    }


}
