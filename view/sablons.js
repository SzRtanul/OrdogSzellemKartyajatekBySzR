export default Sablons;
class Sablons{
    constructor(){
        this.kk="";
    }

    jatekter(kartyalista = []){
        let visszaad = "";
        for(let i = 0; i < kartyalista.length; i++){
            visszaad += `<button class="kartya"><p>${kartyalista[i]}</p></button>`;
        }
        return visszaad;
    }
}