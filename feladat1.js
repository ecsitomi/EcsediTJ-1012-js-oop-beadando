class Szemely {
    constructor(csaladinev,keresztnev,eves,hobby){
        this.csaladinev=csaladinev;
        this.keresztnev=keresztnev;
        this.eves=eves;
        this.hobby=hobby;
    }
    teljesnev(){
        return `${this.csaladinev} ${this.keresztnev}`;
    }
    eletkor(){
        return `${this.eletkor}`;
    }
    getHobby(){
        return `${this.hobby}`;
    }
    setHobby(newHobby){
        this.hobby=newHobby;
    }
}