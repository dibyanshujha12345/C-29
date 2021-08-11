class Base {
    constructor(x,y,width,height,color,isStatic){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.color = color;

        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        
        rect(this.x,this.y,this.width,this.height); 
    }
}