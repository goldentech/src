/*
 * 所有A开头的类都是一个自定义控件
 * 
 * 本控件设定了Http Request
 * 
 */ 

class AHttpRequestPost extends egret.Sprite {

    private statusGetLabel: egret.TextField;
    

    public constructor(stageWidth,stageHeight) {
        super();
        this.sendPostRequest("http://127.0.0.1/httptest/post.php");
    }
    private sendPostRequest(url:string) {

        var params = "p1=postP1&p2=postP2";

        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url,egret.HttpMethod.POST);
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
        
        var temp = JSON.parse(request.response);
        alert("start");
        alert(temp.name.name2);
        alert("end");
        
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
    }

    private onPostIOError(event: egret.IOErrorEvent): void {
        console.log("post error : " + event);
    }

    private onPostProgress(event: egret.ProgressEvent): void {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
  
    
  
    
    
    
   


}
