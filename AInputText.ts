/*
 * 所有A开头的类都是一个自定义控件
 * 
 * 本控件设定了输入框
 * 
 */ 

class AInputText extends egret.Sprite {

    public constructor(tagName, initContent,y) {
        super();
        
        this.creatInputText(tagName,initContent,y);
    }

    
    
    public content;
    
    private creatInputText(tagName,initContent,y):void {
        
        //USER NAME AND USER INPUT
        
        var tag: egret.TextField = new egret.TextField();
        tag.text = tagName;
        tag.x = 100;
        tag.y = y;
        tag.width = 130;
        this.addChild(tag);
        
        this.content = new egret.TextField();
        this.content.type = egret.TextFieldType.INPUT;
        this.content.text = "";
        this.content.x = 250;
        this.content.y = y;
        this.content.width = 300;
        this.content.textColor = 0x000000;
        this.layTxBg(this.content );
        this.addChild(this.content );
        
        
    }
    
  
    
    private layTxBg(tx: egret.TextField): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x,tx.y,tx.width,tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    
   


}
