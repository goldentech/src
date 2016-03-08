/*
 * 所有A开头的类都是一个自定义控件
 * 
 * 本控件设定了Http Request
 * 
 */ 

class AHttpRequest extends egret.Sprite {

    public constructor(stageWidth,stageHeight) {
        super();
        
        this.creatHttpRequest(stageWidth,stageHeight);
    }

    
    
    statusPostLabel;    
    private creatHttpRequest(stageWidth,stageHeight):void {
        
//        var request = new egret.HttpRequest();
//        request.responseType = egret.HttpResponseType.TEXT;
//        request.open("http://httpbin.org/get",egret.HttpMethod.GET);
//        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//        request.send();
//        request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
//        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
//        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
          
//        var tag: egret.TextField = new egret.TextField();
//        this.addChild(tag);
        this.sendPostRequest();
        
        
    }
    
    private sendPostRequest() {
        var statusPostLabel = new egret.TextField();
        this.statusPostLabel = statusPostLabel;
        this.addChild(statusPostLabel);
        statusPostLabel.size = 18;
        statusPostLabel.x = 300;
        statusPostLabel.y = 40;
        statusPostLabel.text = "Sending POST request to http://127.0.0.1/httptest/post.php";

        var params = "p1=postP1&amp;p2=postP2";

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("127.0.0.1/httptest/post.php",egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);

    }

    private onPostComplete(event: egret.Event) {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ",request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "POST response:\n" + request.response.substring(0,50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 300;
        responseLabel.y = 70;
        this.statusPostLabel.text = "Get POST response!";
        alert("finish");
    }

    private onPostIOError(event: egret.IOErrorEvent): void {
        console.log("post error : " + event);
    }

    private onPostProgress(event: egret.ProgressEvent): void {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
    
  
    
  
    
    
    
   


}
