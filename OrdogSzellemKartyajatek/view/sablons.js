export default class Sablons{
    constructor(){
        this.visszaad="";
    }

    jatekter(kartyalista = []){
        this.visszaad = "";
        for(let i = 0; i < kartyalista.length; i++){
            this.visszaad += `<button class="kartya" style="transform: rotate(${(4*i)-53}deg); transform-origin: bottom left; "><p>${kartyalista[i]}</p></button>`;
            console.log()
        }
        return this.visszaad;
    }

    eredmeny(szoveg=""){
        this.visszaad=`<p>${szoveg}</p>`;
    }
}