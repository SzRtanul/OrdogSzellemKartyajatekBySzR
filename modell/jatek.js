export default Jatek;
class Jatek{
    events = [];
    constructor(){
        //this.
        this.kartyak = [];
        this.felforditva = [];
        this.irasok=["Elvitt az ördög", "Megmentett a jó lélek"];
        for(let i = 0; i<20; i++){
            kartyak.push((Math.random()*10) > 2 ? 1 : 0);
            this.felforditva.push(0);
        }
    }
    
    felfordit(i) {
        if(i>=0 && i<this.kartyak.length) this.felforditva=1;
        return i>=0 && i<this.kartyak.length ? this.irasok[this.kartyak[i]] : "Ez a kártya nem létezik";  
    }

    GetKartyak(){
        let visszaad = [];
        for(let i = 0; i<this.kartyak.length; i++){
            visszaad.push(this.felforditva ? this.irasok[this.kartyak[i]] : "")
        }
        return visszaad;
    }

}