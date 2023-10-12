class Pont {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    tavolsagAzOrigotol(){
        return Math.sqrt(this.x**2+this.y**2);
    }
    static tavolsag(p1,p2){
        return Math.sqrt((p1.x-p2.x)**2+(p1.y-p2.y)**2);
    }
}