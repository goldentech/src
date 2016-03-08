

class MutipleOjectEX extends egret.Sprite {
    
    
    public constructor(width,height) {
        super();
        this.data = 
        {"data":
            [
                {
                    "name":"我1塔",
                    "id":"myTower1",
                     "x":240,
                     "y":500,
                     "life": 30
                    
                    
                },
                {
                    "name": "我2塔",
                    "id": "myTower2",
                    "x": 140,
                    "y": 500,
                    "life": 30
                    
                },
                {
                    "name": "我3塔",
                    "id": "myTower3",
                    "x": 40,
                    "y": 500,
                    "life": 30
                    
                    
                },
                {
                    "name": "敌1塔",
                    "id": "enemyTower1",
                    "x": 340,
                    "y": 500,
                    "life": 30

                },
                
                {
                    "name": "敌2塔",
                    "id": "enemyTower2",
                    "x": 440,
                    "y": 500,
                    "life": 30

                },
                {
                    "name": "敌3塔",
                    "id": "enemyTower3",
                    "x": 540,
                    "y": 500,
                    "life": 30

                }
            ]
        }
        
        this.initGameScene();
    
    }
    private data;
    
    //根据输入的文档初始化界面
    private initGameScene()
    {
        var length = this.data.data.length;
        var i = 0;
        while(i<length)
        {
            var current = this.data.data[i];
            
            
            //这是塔的名字
            var tag: egret.TextField = new egret.TextField();
            tag.text = current.name;
            tag.x = current.x;
            tag.y = current.y;
            this.addChild(tag);
            
            //这是塔剩余的生命值，关键在life.name 的设定可以让这个控件记住名字以便以后使用
            var life: egret.TextField = new egret.TextField();
            life.text = current.life+"/30";
            life.x = current.x;
            life.y = current.y + 40;
            life.name = current.id;//这里赋予了控件名字
            this.addChild(life);
            
            //这个部分就是为了测试刷新效果，会在touchhandler里调用refreshGameScene，不是重点
            life.touchEnabled = true;
            life.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
            
            
            i++;
        }
        
    }
   
    
    //点击的时候，根据点击的控件决定要修改原始json数据的哪个部分
    //仅仅是测试，重点是调用了refreshGameScene
    private touchHandler(evt: egret.TouchEvent): void {
        var life: egret.TextField = evt.currentTarget;
        var length = this.data.data.length;
        var i = 0;
        while(i < length) {
            var current = this.data.data[i];
            if(current.id == life.name)
            {
                current.life--;
                break;
            }
           
            i++;
        }
        this.refreshGameScene();
        

    }
    //这是这个类主要要解决的问题
    //使用循环赋值，给界面上所有控件赋值
    //任意时刻需要刷新的时候都可以使用这个
    //无论刷新多少个控件，代码长度不会变化
    private refreshGameScene()
    {
        var length = this.data.data.length;
        var i = 0;
        while(i < length) {
              var current = this.data.data[i];
              (<egret.TextField>this.getChildByName(current.id)).text = current.life+"/30";
              i++;
        }
        
    }

}



/*
class A extends egret.Sprite {
    public result = {};
    private callback: Function;
    public constructor() {
        super();
        this.sendPostRequest("http://127.0.0.1/httptest/post.php");
    }
    public setfunction(callback: Function) {
        this.callback = callback;
    }
    private sendPostRequest(url: string) {

        var params = "p1=postP1&p2=postP2";

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url,egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        request.send(params);

        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);


    }

    private onPostComplete(event: egret.Event) {
        var request = <egret.HttpRequest>event.currentTarget;
        this.result = JSON.parse(request.response);
        this.callback(this.result);
        alert("aaaaa")
    }

}
*/
