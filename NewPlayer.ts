

class NewPlayer extends egret.Sprite {

    public constructor(simWidth,simHeight) {
        super();
        
        
        
        this.registerNew(simWidth,simHeight);
    }

    
    
    private txt:eui.Label;
    public socket;
    
    private myScroller:eui.Scroller;
    
    private registerNew(simWidth,simHeight):void {
        
        //设定屏幕背景
        var sky: egret.Bitmap = this.createBitmapByName("bgImage");
        
        var stageW: number = simWidth;
        var stageH: number = simHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.addChild(sky);
        //结束设定背景
        
        


       //用户名和密码的输入框
        
        var username = new AInputText("用户名:","",300);
        this.addChild(username);
        
        var password = new AInputText("密码:","",360);
        this.addChild(password);
        
       
       
        
      
        
        
       
        
        var button: egret.Bitmap = this.createBitmapByName("button1");
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            
            //alert(username.content.text);
            var user1 = { username: username.content.text,password: password.content.text };
            //alert(user1.username + " " + user1.password);
            this.sendMessage(user1,"message");

        },this);
        
        button.x = 200;
        button.y = 730;
        button.width = 240;
        button.height = 100;
        
        this.addChild(button);
        

        this.socket = io.connect("http://127.0.0.1:8080/");

        var self = this;

        this.socket.on('message',function(message) {


            self.trace(message);

        });
        this.socket.on('message2',function(message) {


            self.trace(message);

        });

        //alert("finsh");

        //this.socket = io.connect("http://chat-56032.onmodulus.net:80/");
        
//        this.socket = io.connect("http://127.0.0.1:8080/");
//        
//        var self = this;
//        
//        this.socket.on('message',function(message) {
//
//
//            self.trace(message);
//
//        });
//        this.socket.on('message2',function(message) {
//            
//
//            self.trace(message);
//           
//        });
        
        
    }
    
   
    
    private layTxBg(tx: egret.TextField): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x,tx.y,tx.width,tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    
    private sendMessage(msg, key:string): void {
        //this.trace(msg);
        this.socket.emit(key,msg);
    }

    public trace(msg): void {
        
        
        //this.txt.text += "\n" + msg;
        
       
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
