/*
 * 一个简易聊天室
 * 用来测试socket.io的功能
 * 
 * 
 * 
 */ 

class ChatSocket extends egret.Sprite {

    public constructor(simWidth,simHeight) {
        super();
        
        this.startChat(simWidth,simHeight);
    }

    
    
    private txt:eui.Label;
    public socket;
    
    private myScroller:eui.Scroller;
    
    private startChat(simWidth,simHeight):void {
        var sky: egret.Bitmap = this.createBitmapByName("bgImage");
        
        
       // this.storyLine.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        //sky.touchEnabled = true;
//        sky.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
//            
//            this.sendMessage("message content");
//            
//        },this);
        
        this.addChild(sky);
        var stageW: number = simWidth;
        var stageH: number = simHeight;
        sky.width = stageW;
        sky.height = stageH;



        
        //var scroll: eui.VScrollBar = new eui.VScrollBar();
       
        this.txt = new eui.Label();
        //this.txt.height = 600;
        this.txt.width = 640;
        
        this.txt.text = "早睡晚起身体好";
        
       
       
        
      
        
        
        //this.txt.type = egret.TextFieldType.INPUT;
        
        
        this.myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
       
        var group = new eui.Group();
        group.addChild(this.txt);
        this.myScroller.width = 640;
        this.myScroller.height = 600;
        
        //设置viewport
        this.myScroller.viewport = group;
        this.addChild(this.myScroller);
        
       // this.addChild(this.txt);
        
        
        
        
        //USER NAME AND USER INPUT
        var name: egret.TextField = new egret.TextField();
        name.type = egret.TextFieldType.INPUT;
        name.text = "把你的名字放这";
        name.x = 150;
        name.y = 630;
        name.width = 350;
        name.textColor = 0x000000;
        this.layTxBg(name);
        this.addChild(name);
        
        var content: egret.TextField = new egret.TextField();
        content.type = egret.TextFieldType.INPUT;
        content.text = "你想说啥放这";
        content.x = 150;
        content.y = 680;
        content.width = 350;
        content.textColor = 0x000000;
        this.layTxBg(content);
        this.addChild(content);
        
        var button: egret.Bitmap = this.createBitmapByName("button1");
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            
            this.sendMessage("[" + name.text + "]:" + content.text,"message");
            content.text = " ";

        },this);
        
        button.x = 200;
        button.y = 730;
        
        button.width = 240;
        button.height = 100;
        
        this.addChild(button);
        
//        var button2: egret.Bitmap = this.createBitmapByName("button1");
//        button2.touchEnabled = true;
//        button2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
//
//            this.sendMessage("[" + name.text + "]:" + content.text,"message2");
//            content.text = " ";
//
//        },this);
//
//        button2.x = 200;
//        button2.y = 800;
//
//        button2.width = 240;
//        button2.height = 100;
//
//        this.addChild(button2);
        

        //alert("finsh");

        //this.socket = io.connect("http://chat-56032.onmodulus.net:80/");
        
        this.socket = io.connect("http://127.0.0.1:8080/");
        
        var self = this;
        
        this.socket.on('message',function(message) {


            self.trace(message);

        });
        this.socket.on('message2',function(message) {
            

            self.trace(message);
           
        });
        
        
    }
    
    private moveScroller(): void {
        //点击按钮后改变滚动的位置
        var sc = this.myScroller;
        //alert(sc.height + ":" + sc.viewport.contentHeight)
        sc.validateNow();
        
        if(sc.height <= sc.viewport.contentHeight) {
            
            sc.viewport.scrollV = sc.viewport.contentHeight - sc.height;
        }
       
        
    }
    
    private layTxBg(tx: egret.TextField): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x,tx.y,tx.width,tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    
    private sendMessage(msg: string, key:string): void {
        this.trace(msg);
        this.socket.emit(key,msg);
    }

    public trace(msg: string): void {
        
        
        this.txt.text += "\n" + msg;
        
        this.moveScroller();
    }

    
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
   
    
   


}
