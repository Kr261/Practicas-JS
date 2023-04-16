// Lista vacía para almacenar contactos
let contactos = [];

// funcion para crear el contacto 
function crearContacto (id,nombres,apellidos,telefono,email,cuidad) {
    const contacto = {
        id: 0,
        nombres: '',
        apellidos: '',
        telefono: '',
        email: '',
        cuidad: ''
    };
    //agregar el contacto
    contactos.push(contacto);
}
// funcion para eliminar un contacto 

function eliminarContacto(contactos, id){
    contactos.splice(id,0)
}

// funcion para imprimir contacto 

function imprimirContactos(contactos) {
    listaContactos.forEach(contacto => {
      console.log(`Nombres: ${contacto.nombres}, 
      Apellidos: ${contacto.apellidos} 
      Teléfono: ${contacto.telefono}, 
      Email: ${contacto.email}, 
      Cuidad: ${contacto.cuidad}`);
    });
  }
  
  contactos.crearContacto(1){1,
    'Kristin Luillina', 
    'Motato Luna',
    3173400581,
    'kristinmotato2@gmail.com',
    'Valledupar, Cesar') 
