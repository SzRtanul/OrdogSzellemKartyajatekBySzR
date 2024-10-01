import Sablons from "../view/sablons.js";
import Jatek from "../modell/jatek.js";

let jatek = new Jatek();

main();

function main(){
    
    let sablons = new Sablons();
    kezd(sablons)
}

function kezd(sablons){
    let jatekterek = document.getElementsByClassName("jatekter");
    
    for(let i = 0; i < jatekterek.length; i++){
        jatekterek[i].innerHTML = sablons.jatekter(jatek.getKartyak());
    }

    for(let i = 0; i < jatekterek.length; i++){
        let kartyak = jatekterek[i].getElementsByClassName("kartya");
        for(let j = 0; j < kartyak.length; j++){
            kartyak[j].addEventListener("click", function(event){ 
                // console.log(j)
                if(!jatek.felfordit(j)){
                    let eredmenypalettak= document.getElementsByClassName("eredmeny");
                    for(let k = 0; k<eredmenypalettak.length; k++){
                        eredmenypalettak[k].innerHTML=jatek.getGyozelem() ? "Gratulálok! Megmentett a jó lélek." : "A játék véget ért. Elvitt az ördög.";
                    }
                }
                event.target.innerHTML = jatek.getKartya(j);
                event.target.classList.add("kartyaeffect");
                event.target.style.setProperty("rotate", `${-0.3*j}deg`);
            });
        }
    }
}