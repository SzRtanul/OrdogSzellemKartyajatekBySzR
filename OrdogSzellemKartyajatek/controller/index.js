import Sablons from "../view/sablons.js";
import Jatek from "../modell/jatek.js";

main();

function main(){
    let jatek = new Jatek();
    let sablons = new Sablons();
    update(jatek, sablons)
}

function update(jatek, sablons){
    let jatekterek = document.getElementsByClassName("jatekter");
    
    for(let i = 0; i < jatekterek.length; i++){
        jatekterek[i].innerHTML = sablons.jatekter(jatek.getKartyak());
    }

    for(let i = 0; i < jatekterek.length; i++){
        let kartyak = jatekterek[i].getElementsByClassName("kartya");
        for(let i = 0; i < kartyak.length; i++){
            kartyak[i].addEventListener("click", function(){ 
                if(jatek.felfordit(i)){
                    let eredmenypalettak= document.getElementsByClassName("eredmeny");
                    for(let i = 0; i<eredmenypalettak.length; i++){
                        eredmenypalettak[i].innerHTML=jatek.getGyozelem() ? "Gratulálok! Megmentett a jó lélek." : "A játék véget ért. Elvitt az ördög.";
                    }
                } 
                update(jatek, sablons);})
        }
    }
}