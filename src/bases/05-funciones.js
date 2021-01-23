


// Funciones 

const saludar = function(nombre) {
   return `Hola ${nombre}`;
}
console.log( saludar('Silas') );

const hello = nombre => `Hola ${nombre}`
console.log( hello('Adriana') );

const getUser = () => (
   {
      uid: 'ABC123',
      userName: 'SLSVM'
   }
)

const user = getUser()

console.log(user);

// TATEA
//  1. Transformar a una funcion de flecha
//  2. Tiene que retornar un objeto implicito
//  3. Pruebas
// function getUsuarioActivo(nombre) {
//    return {
//       uid: 'ABC567',
//       username: nombre
//    }
// }

// const usuarioActivo = getUsuarioActivo('Silas');
// console.log(usuarioActivo);
const getUsuarioActivo = nombre => ({
   uid: 'ABC567',
   userName: nombre
});

const usuarioActivo = getUsuarioActivo('Adri');
console.log(usuarioActivo)