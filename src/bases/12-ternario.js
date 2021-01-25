
const activo = true;
// let mensaje = '';

//  METODO ANTIGUO
// if (activo) {
//    mensaje = 'Activo';
// } else {
//    mensaje = 'Inactivo'
// }

// METODO TERNARIO SI QUEREMOS UTILIZAR AMBOS RESULTS 
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// EN CASO DE SOLO NECESITAR UNA ACCION NO ES NECESARIO MANDAR EL NULL COMO AQUI
// const mensaje = (activo) ? 'Activo' : null;
// PARA ESO SE UTILIZA LOS AMPERSONS
const mensaje = activo && 'Activo';

console.log(mensaje);