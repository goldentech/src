
class YourInput extends egret.Sprite {
    
    public constructor() {
        super();
        this.startInput();
    }

    //totalPage 写的是输出总页数，也就是问题总数
    public totalPage: number = 9;
    // puInputNumber 是循环变量,初始值1，以后从 puINputNumber-1开始循环
    public puInputNumber: number = 1;
    //puOutputQuestion 写的是输出到屏幕的文字
    public puOutputQuestion = { OutputQuestion: [{ question: "请输入用户名，然后开始你的YY之旅！" },{ question: "你想让玩家（主人公）去哪？" },{ question: "何时出发？" },{ question: "遇到了什么事？" },{ question: "敌人名谁姓谁?"},{ question: "赢了主人公可以获得啥？" },{ question: "赢了想去哪？" },{ question: "输了还可以得到啥？" },{ question: "输了让玩家（主人公）去哪？" }]};
    //puInputLabel 写的是变量名
    public puInputLabel = { InputLabel: [{ label: "uYourself" },{ label: "uLocation" },{ label: "uTime" },{ label: "uStory" },{ label: "uEnemy" },{ label: "uWinContent" },{ label: "uWinNext" },{ label: "uLoseContent" },{ label: "uLoseNext" }]};
    //puOutputLocationList 写的是地址列表，numlist里面放一共多少个地址选项，目前只支持6地址
    public puOutputLocationList = { NumList: [6],OutputLocationList: [{ label: "练武场" },{ label: "书房" },{ label: "酒馆" },{ label: "小巷" },{ label: "公正峰" },{ label: "医馆" }] };
    // uInputData 是本ts输出的数据，也就是用户输入的数据,UserInputData是玩家自己输入的，UserChooseData是list里面选的
    public uInputData = { UserInputData: [{ username: '',imageName: '',imageLocation: '',imageTime: '',imageEnemy: '',imageWinContent: '',imageWinNext: '',imageLoseContent: '',imageLoseNext: '' }],UserChooseData: [{ locationNumber: 0,winNumber: 0,loseNumber: 0 }]}
    
    private startInput(): void {
        this.backgroundMusic();
        this.backgroundGraph();
        this.inputData();
        //this.puYou = this.inputLocation();
        //this.puLocation = this.inputTime();
        //this.puTime = this.inputYourself();          
    }
    
    private backgroundMusic(): void {
        this.sound = RES.getRes("pal3_1");
        this.soundChannel = this.sound.play();
        
    }
    private backgroundGraph():void{
        var sky: egret.Bitmap = this.createBitmapByName("bgImage");
        sky.width = 640;
        sky.height = 1000;
        
        this.addChild(sky);
    }
    
    private inputData(): void {
        
        var uYourself: egret.TextField = new egret.TextField();
        uYourself.type = egret.TextFieldType.INPUT;
        uYourself.text = this.puOutputQuestion.OutputQuestion[this.puInputNumber-1].question;
        uYourself.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label;
        uYourself.x = 10;
        uYourself.y = 450;
        uYourself.height = 60;
        uYourself.width = 300;
        uYourself.textColor = 0x000000;
        uYourself.background = true;
        uYourself.backgroundColor = 0xFFFFFF; 
        uYourself.multiline = true;
        //uYourself.border = true;
        //uYourself.borderColor = 0xFF6600;
        this.layTxBg(uYourself);
        this.addChild(uYourself);
       
        var uButton = new eui.Button();
        uButton.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label+"button";
        uButton.x = 30;
        uButton.y = 530;
        uButton.height = 60;
        uButton.width = 100;
        uButton.label = "确定";
        uButton.scaleX = 2;
        uButton.scaleY = 2;
        uButton.skinName = "resource/skins/ButtonSkin.exml";
        uButton.horizontalCenter = 1;
        uButton.verticalCenter = 1;
        this.addChild(uButton);
        uButton.addEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYourself.text,this.puInputNumber) },this);
        //button.removeEventListener(egret.TouchEvent.TOUCH_TAP,function() { this.btnTouchHandler(uYou.text) },this);
       

    }
    
    private startYourGame(): void {
        
        var uButton2 = new eui.Button();
        uButton2.name = "startYourGame"+"label";
        uButton2.x = 200;
        uButton2.y = 350;
        uButton2.height = 80;
        uButton2.width = 100;
        uButton2.label = "开启新的旅途";
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
        shp.name = this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "border";
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x,tx.y,tx.width,tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    
    private btnTouchHandler(inputData,i): void {
        
        //console.log("button touched");
        //console.log(inputData);
        //console.log(i);
        if (i < this.totalPage)
        {
          this.uInputData.UserInputData[this.puInputNumber - 1]=inputData
          console.log(this.uInputData.UserInputData[this.puInputNumber - 1]);
          //以下是第二个输入，地址列表：
          if(i == 1 || i == 6 || i== 8)//打开地址选项
          {
              this.initRadioButtonWithGroup();
          }
          if(i == 2 || i == 7) {//删除地址选项
              for(var j = 0;j < this.puOutputLocationList.NumList[0];j++)
              { this.removeChild(this.getChildByName('rdb' + j)); }
          
          }
          if(i == this.totalPage-1)
          {
              //console.log("output test!");
          }
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "border"));
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label)); 
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "button"));
          this.puInputNumber++;
          this.inputData(); }
        else 
        {
          //this.backgroundGraph();
          this.startYourGame(); 
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label + "border"));
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label));
          this.removeChild(this.getChildByName(this.puInputLabel.InputLabel[this.puInputNumber - 1].label+"button"));}
        if(i == 9) {//删除地址选项，删除的是最后一个输了去哪的选项
            for(var j = 0;j < this.puOutputLocationList.NumList[0];j++)
            { this.removeChild(this.getChildByName('rdb' + j)); }

        }
    }
    
    //以下是单选按钮
    private initRadioButtonWithGroup(): void {
        var radioGroup: eui.RadioButtonGroup = new eui.RadioButtonGroup();
        radioGroup.addEventListener(eui.UIEvent.CHANGE,this.radioChangeHandler,this);
        var rdb: eui.RadioButton = new eui.RadioButton();

        for(var i = 0;i < this.puOutputLocationList.NumList[0];i++)
        {
            var rdb: eui.RadioButton = new eui.RadioButton();
            rdb.x = 50+i*100;
            rdb.y = 700;
            if(i == 0) {
                rdb.selected = true;//默认选项
            }
            rdb.label = this.puOutputLocationList.OutputLocationList[i].label;
            rdb.value = i+1;
            rdb.group = radioGroup;
            rdb.skinName = "resource/skins/radioButtonSkin.exml";
            rdb.name = 'rdb'+i;
            this.addChild(rdb);
        }
        
    }
    private radioChangeHandler(evt: eui.UIEvent): void {
        var radioGroup: eui.RadioButtonGroup = evt.target;
        //console.log(this.puInputNumber);
        //以下是三个选项的储存，this.puInputNumber=2对应UserChooseData 的0位置，
        if(this.puInputNumber == 2) {
            this.uInputData.UserChooseData[0] = radioGroup.selectedValue;
            console.log(this.uInputData.UserChooseData[0]);
        }
        if(this.puInputNumber == 7) {
            this.uInputData.UserChooseData[1] = radioGroup.selectedValue;
            console.log(this.uInputData.UserChooseData[1]);
        }
        if(this.puInputNumber == 9) {
            this.uInputData.UserChooseData[2] = radioGroup.selectedValue;
            console.log(this.uInputData.UserChooseData[2]);
        }
        
    }
    
	
}


    