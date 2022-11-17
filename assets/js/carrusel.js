var fotos = ['/images/fotopersona/persona1.png', '/images/fotopersona/persona2.png', '/images/fotopersona/persona3.png', '/images/fotopersona/persona4.png', '/images/fotopersona/persona5.png'],
    cont= 0;
// var names =     

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.carousel-control-prev-icon'),
            adelante = contenedor.querySelector('.carousel-control-next-icon'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras) {
            if(cont > 0){
                img.src = fotos[cont - 1];
                cont--;
            } else {
                img.src = fotos[fotos.length - 1];
                cont = fotos.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < fotos.length - 1){
                img.src = fotos[cont + 1];
                cont++;
            } else {
                img.src = fotos[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carousel');

    carrusel(contenedor);
});