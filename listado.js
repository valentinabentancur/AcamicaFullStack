const mongoose = require('./conexion.js');

const plato = mongoose.model('Menu', {
    plato: String,
    precio: String,
    tipo_de_plato: String,
} );


platos.find().then(function (resultado) {

    console.log(resultado);
});