const clientes = [{
    nombre: 'Dora',
    localidad: 'Engativá',
    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus libero mollitia sunt expedita consectetur iure, quas, magnam sint rem ipsum aperiam?',
},{
    nombre: 'Julio',
    localidad: 'Teusaquillo',
    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus libero mollitia sunt expedita consectetur iure, quas, magnam sint rem ipsum aperiam?',
},{
    nombre: 'Sandra',
    localidad: 'Mártires',
    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus libero mollitia sunt expedita consectetur iure, quas, magnam sint rem ipsum aperiam?',
},{
    nombre: 'Francisco',
    localidad: 'Candelaria',
    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus libero mollitia sunt expedita consectetur iure, quas, magnam sint rem ipsum aperiam?',
},{
    nombre: 'Cecilia',
    localidad: 'Suba',
    testimonio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus libero mollitia sunt expedita consectetur iure, quas, magnam sint rem ipsum aperiam?',
}]



// var fotos = ['/images/fotopersona/persona1.png', '/images/fotopersona/persona2.png', '/images/fotopersona/persona3.png', '/images/fotopersona/persona4.png', '/images/fotopersona/persona5.png'],
//     cont= 0; 

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.carousel-control-prev-icon'),
            adelante = contenedor.querySelector('.carousel-control-next-icon'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras) {
            if(cont > 0){
                img.src = clientes[cont - 1];
                cont--;
            } else {
                img.src = clientes[fotos.length - 1];
                cont = clientes.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < clientes.length - 1){
                img.src = clientes[cont + 1];
                cont++;
            } else {
                img.src = clientes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carousel');

    carrusel(contenedor);
});