 
 
 require('./connection')
const Servicio=  require('./models/Servicios')
// creating a new document base on the model
const getValueInput = () =>{
const servicio = new Servicio({
    cliente: document.getElementById("nm_cliente").value,
    equipo: document.getElementById("tip_equipo").value,
    marca: document.getElementById("mrc_equipo").value,
    localidad: document.getElementById("local").value,
    direccion: document.getElementById("dire").value,
    estado: document.getElementById("estad").value,
    descripcion: document.getElementById("descp_trabajo").value
});
servicio.save((err, document) => {
    if (err) console.log(err);
      console.log('saved:', document);
  });
document.getElementById("mostrar").innerHTML = servicio; 
console.log(servicio)
}
getValueInput()

// saving the created document
