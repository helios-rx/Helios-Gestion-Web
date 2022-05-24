const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const ServicioSchema = new Schema({
    cliente: String,
    equipo: String,
    marca: String,
    localidad: String,
    direccion: String,
    estado: String,
    descripcion: String
});

module.exports = model('Servicio', ServicioSchema);