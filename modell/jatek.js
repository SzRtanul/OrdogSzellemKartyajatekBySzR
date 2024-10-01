export default class Jatek{
    events = [];
    constructor(){
        this.elvitte=false;
        this.kartyak = [];
        this.felforditva = [];
        this.irasok=["Elvitt az ördög", "Megmentett a jó lélek"];
        for(let i = 0; i<20; i++){
            this.kartyak.push((Math.random()*10) > 2 ? 1 : 0);
            this.felforditva.push(0);
        }
        this.visszaad="";
        this.nyert=false;
        
    }
    
    felfordit(i) {
        let both = false;
        if(!this.nyert && !this.elvitte && i >= 0 && i<this.kartyak.length){ 
            this.felforditva[i]=1;
            this.elvitte = !this.kartyak[i];
            this.nyert = this.vizsgal();
            both = !this.elvitte && !this.nyert;
        }
        return both;  
    }

    getKartyak(){
        this.visszaad = [];
        for(let i = 0; i<this.kartyak.length; i++){
            this.visszaad.push(!this.felforditva[i] ? this.irasok[this.kartyak[i]] : "")
        }
        return this.visszaad;
    }

    vizsgal(){
        this.both = true;
        for(let i = 0; i<this.kartyak.length && this.both; i++){
            this.both = !(this.kartyak[i] ^ this.felforditva[i]);
        }
        return this.both;
    }

    getGyozelem(){
        return !this.elvitte && this.nyert;
    }
}