class Szemely {
    constructor(csaladinev,keresztnev,eletkor,hobby){
        this.csaladinev=csaladinev;
        this.keresztnev=keresztnev;
        this.eletkor=eletkor;
        this.hobby=hobby;
    }
    teljesnev(){
        return "${this.csaladinev} ${this.keresztnev}";
    }
    eletkor(){
        return "${this.eletkor}"
    }
}