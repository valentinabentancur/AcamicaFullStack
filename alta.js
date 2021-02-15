  
const mongoose = require('./conexion.js');

const Plato = mongoose.model('Menu', {
    plato: String,
    precio: String,
    tipo_de_plato: String,
} );


let nuevoPlato = {
    plato: 'normal', precio: "500",tipo_de_plato:'hamburguesa'
}


const miPlatofavorito = new Plato(nuevoPlato);


miPlatofavorito.save(); 