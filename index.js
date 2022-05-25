require('./connection')
const Servicio=  require('./models/Servicios')
// creating a new document base on the model
const servicio = new Servicio({
    cliente: 'String',
    equipo: 'String',
    marca: 'String',
    localidad: 'String',
    direccion: 'String',
    estado: 'String',
    descripcion: 'String'
});

console.log(servicio)

// saving the created document
servicio.save((err, document) => {
  if (err) console.log(err);
    console.log('saved:', document);
});