
class YourInput extends egret.Sprite {

    public constructor() {
        super();
        this.startInput();
    }
    //public puYourself:string;
    //public puYou: string;
    //public puLocation: string;
    //public puTime: string;
    public puInputNumber: number = 1;
    public puOutputQuestion = { OutputQuestion: [{ question: "请输入用户名" },{ question: "你想变成谁？" },{ question: "你要到哪里去？" },{ question: "你想何时出发？" }] };
    public puInputLabel = { InputLabel: [{ label: "uYourself" },{ label: "uYou" },{ label: "uLocation" },{ label: "uTime" }] };

    private startInput(): void {
        //this.backgroundMusic();
        this.backgroundGraph();
        this.inputData();
        //this.puYou = this.inputLocation();
        //this.puLocation = this.inputTime();
        //this.puTime = this.inputYourself();          
    }

//    private backgroundMusic(): void {
//        this.sound = RES.getRes("pal3_1");
//        this.soundChannel = this.sound.play();
//
//    }
    private backgroundGraph(): void {
        var sky: egret.Bitmap = this.createBitmapByName("bgImage");
        sky.width = 640;
        sky.height = 1000;

        this.addChild(sky);
        //以下可以改背景颜色为蓝色
        //egret.log(123);
        //var bg: egret.Shape = new egret.Shape();
        //bg.graphics.beginFill(0x336699);
        //bg.graphics.endFill();
        //super.addChild(bg);//用this也可以，不写addChild不会有效果
    }

    private inputData(): void {

        var uYourself: egret.TextField = new egret.TextField();
        uYourself.type = egret.TextFieldType.INPUT;
        uYourself.text = this.puOutputQuestion.OutputQuestion[this.puInputNumber - 1].question;
        uYourself.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label;
        uYourself.x = 150;
        uYourself.y = 450;
        uYourself.width = 350;
        uYourself.textColor = 0xFFFFFF;
        uYourself.background = true;
        uYourself.backgroundColor = 0x000000;
        uYourself.border = true;
        uYourself.borderColor = 0xFF6600;
        this.layTxBg(uYourself);
        this.addChild(uYourself);

        var uButton = new eui.Button();
        uButton.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button";
        uButton.x = 200;
        uButton.y = 500;
        uButton.height = 100;
        uButton.width = 100;
        uButton.label = "确定";
        uButton.scaleX = 2;
        uButton.scaleY = 2;
        uButton.skinName = "resource/skins/ButtonSkin.exml";
        this.addChild(uButton);
        uButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYourself.text,this.puInputNumber) },this);
        //button.removeEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text) },this);
        

    }

    private startYourGame(): void {

        var uButton2 = new eui.Button();
        uButton2.x = 200;
        uButton2.y = 350;
        uButton2.height = 100;
        uButton2.width = 100;
        uButton2.label = "新的旅途，开启！";
        uButton2.scaleX = 2;
        uButton2.scaleY = 2;
        uButton2.skinName = "resource/skins/ButtonSkin.exml";
        this.addChild(uButton2);
        //uButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text,this.puInputNumber) },this);
        //button.removeEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text) },this);
 
   
    }


    //private要写在class里面，调用处的外面，用this.调用，
    //function写在调用处一起，直接用名字调用
    private sound: egret.Sound;
    private soundChannel: egret.SoundChannel;

    private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    private layTxBg(tx: egret.TextField): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x,tx.y,tx.width,tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    private btnTouchHandler(inputData,i): void {
        console.log("button touched");
        console.log(inputData);
        console.log(i);
        if(i < 4 )
        {
          
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label));
            this.puInputNumber++;
            this.inputData();  }
        else {
            this.startYourGame();
            //alert(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
            this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label));
        }
        //var user1 = { username: this.puYourself, userNameNew: this.puYou, userLocation: this.puLocation, userTime: this.puTime }
        //console.log(user1.username);
    }


}


    