//Selectores
const imagenes = document.querySelectorAll('.imageSlider');
const imagenPrev = document.querySelector('.nav-izq');
const imagenSig = document.querySelector('.nav-der');
const galeria = document.querySelector('.gallery');
let posicion = 0;





//Clases

class Slider{
    constructor (imagenes){
        this.imagenes = [...imagenes];
    }


}


        
imagenPrev.addEventListener('click' , () =>{
        generarMovimientoImagenes(-1);
})
        imagenSig.addEventListener('click',() =>{
            generarMovimientoImagenes(1);
            
})
    

//Funciones
function generarMovimientoImagenes(direccion) {
    const totalImagenes = slider.imagenes.length;
    posicion = (posicion + direccion + totalImagenes ) % totalImagenes;
    const movimiento = -posicion * 100;
    galeria.style.transform = `translateX(${movimiento}%)`;

    console.log(galeria)

}







//Instancias
let  slider = new Slider(imagenes);







    
