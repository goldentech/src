class Story
{
    constructor (storyFull:string)
    {
        this.storyFull = storyFull;
        this.storyLine = this.getStoryLine();
        this.maxlineCount = this.storyLine.length;
        this.lineCount = 0;
        this.lineEnd = false;
    }
    storyFull:string ;
    storyLine:string[]; 
    maxlineCount;   
    lineCount;
    lineEnd;
    public getLineByIndex(count)
    {
        return this.storyLine[count];
    }
    public getLine()
    {
        var currentLine: string;
        if(this.lineCount < this.maxlineCount)
        {
            currentLine =  this.storyLine[this.lineCount];
            this.lineCount++;
        }
        else
        {
            currentLine = " ";
            this.lineEnd = true;
        }
        return currentLine;
    }
    
    public ifLineEnd()
    {
        return this.lineEnd;
    }
    
    public getStoryLine()
    {
        var lines: string[] =  this.storyFull.split(".");
        return lines;
    }
    
    
    
}
   