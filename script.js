/* ==========================
        DESTELLOS
========================== */

const contenedor = document.getElementById("estrellas");

for(let i=0;i<80;i++){

    const estrella=document.createElement("div");

    estrella.className="destello";

    estrella.style.left=Math.random()*100+"vw";
    estrella.style.top=Math.random()*100+"vh";

    estrella.style.animationDuration=(2+Math.random()*5)+"s";
    estrella.style.animationDelay=(Math.random()*4)+"s";

    contenedor.appendChild(estrella);

}


/* ==========================
        ELEMENTOS
========================== */

const inicio=document.getElementById("inicio");
const sobre=document.getElementById("pantallaSobre");
const carta=document.getElementById("pantallaCarta");

const botonComenzar=document.getElementById("comenzar");
const abrirSobre=document.getElementById("abrirSobre");

const tapa=document.querySelector(".tapa");
const textoCarta=document.getElementById("textoCarta");


/* ==========================
      BOTÓN COMENZAR
========================== */

botonComenzar.addEventListener("click",()=>{

    inicio.style.opacity="0";
    inicio.style.transition=".8s";

    setTimeout(()=>{

        inicio.classList.add("oculto");

        sobre.classList.remove("oculto");

        sobre.style.opacity="0";

        setTimeout(()=>{

            sobre.style.transition=".8s";
            sobre.style.opacity="1";

        },50);

    },800);

});


/* ==========================
        ABRIR SOBRE
========================== */

abrirSobre.addEventListener("click",()=>{

    tapa.style.transform="rotateX(180deg)";

    abrirSobre.style.transform="translateX(-50%) scale(.9)";
    abrirSobre.style.opacity=".2";

    setTimeout(()=>{

        sobre.style.opacity="0";

        setTimeout(()=>{

            sobre.classList.add("oculto");

            carta.classList.remove("oculto");

            escribirCarta();

        },700);

    },900);

});


/* ==========================
      EFECTO ESCRITURA
========================== */

const mensaje=`Esta cartita es con mucho cariño.
La vida es algo loca (como micho cx) y se le ocurrio presentarnos un día sin tomar en cuenta muchos detalles

Lo bonito es que aquí estamos dando gracias por tu vida en un cumpleaños más.

Te deseo todo lo bonito de la vida porque te lo mereces, que cada día estes más cerca de tus objetivos
Glacias por permitirme estar cerquita de ti <3
El día de hoy te quedo a deber el pastel, pero cuando te vea te lleno de besitos
Feliz cumpleaños, Guapote!. ❤️
De mí para tú, con amors.`;

let posicion=0;

function escribirCarta(){

    textoCarta.innerHTML="";

    posicion=0;

    const intervalo=setInterval(()=>{

        textoCarta.innerHTML+=mensaje.charAt(posicion);

        posicion++;

        if(posicion>=mensaje.length){

            clearInterval(intervalo);

        }

    },35);

}