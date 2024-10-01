export default class Sablons{
    constructor(){
        this.visszaad="";
    }

    jatekter(kartyalista = []){
        this.visszaad = "";
        for(let i = 0; i < kartyalista.length; i++){
            this.visszaad += `<button class="kartya"><p>${kartyalista[i]}</p></button>`;
        }
        return this.visszaad;
    }

    eredmeny(szoveg=""){
        this.visszaad=`<p>${szoveg}</p>`;
    }
}