/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let miaudio, reproducir, progreso, maximo;
maximo=530;
function comenzar(){
   miaudio=document.getElementById("miaudio");
   reproducir=document.getElementById("play");
   barra=document.getElementById("barra");
   progreso=document.getElementById("progreso");
   
    reproducir.addEventListener("click",clickando,false);
    barra.addEventListener("click",adelantando,false);
}

function clickando() {
    
    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
       reproducir.innerHTML="Play"; 
       bucle=setInterval(estado,30);
    }else{
        miaudio.play();
        reproducir.innerHTML="Pause";
    }
   
}

function estado(){
    
    if(miaudio.ended===false){
        var total=parseInt(miaudio.currentTime*maximo/miaudio.duration);
        progreso.style.width=total+"px";
    }
}
/*https://www.youtube.com/watch?v=9CUtIRtj8IM&list=PLU8oAlHdN5BnX63lyAeV0LzLnpGudgRrK&index=19
 * */ 


function adelantando(posicion){
    if((miaudio.paused===false) && (miaudio.ended===false)){
        var ratonX=posicion.pageX-barra.offsetLeft; // pageX y offsetLeft son propiedades que me permiten ubicar un punto en la pantalla
        var nuevoTiempo=ratonX*mivideo.duration/maximo;
        miaudio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+"px";
    }
}
window.addEventListener("load",comenzar,false);