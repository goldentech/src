/*
 * 所有A开头的类都是一个自定义控件
 * 
 * 本控件设定了Http Request
 * 
 */ 

class AHttpPostFight extends egret.Sprite {

    
    private result;
    private callback: Function;
    public constructor(callback: Function) {
        super();
        this.sendPostRequest("http://127.0.0.1/httptest/post.php");
        this.callback = callback; 
    }
    private sendPostRequest(url:string) {

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
   }


  
    
  
    
    
    
   


}
