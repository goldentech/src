//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class MapSimData extends egret.Sprite {

    public constructor() {
        super();
        this.initAllSims();
    }
    private sixSims;
    
    public getSixSims()
    {
        return this.sixSims;
    }
    
    private initAllSims()
    {
        var x = 50;
        var y = 275;
        
        
        this.sixSims = { sims: [
            { position: 1,x: x,y: y,sourceName: "sim1",buildName: "练武场"},
            { position: 2,x: x + 200,y: y,sourceName: "sim2",buildName: "书  房" },
            { position: 3,x: x + 400 ,y: y,sourceName: "sim3",buildName: "酒  馆"},
            { position: 4,x: x,y: y + 330,sourceName: "sim4",buildName: "小  巷" },
            { position: 5,x: x + 200,y: y + 330,sourceName: "sim5",buildName: "公正峰" },
            { position: 6,x: x + 400,y: y + 330 ,sourceName: "sim6",buildName: "医  馆" }
            
            ]};
    }
    
    

}