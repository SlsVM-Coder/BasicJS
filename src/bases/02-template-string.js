

const nombre = 'Silas';
const apellido = 'Valle';

//Como se hacia
//const nombreCompleto = nombre + ' '+ apellido;

//Como se hace actualmente:
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo(nombre) {
   return `Hola mi nombres es: ${nombre}`;
}

console.log(`Este es un Texto: ${ getSaludo( nombreCompleto ) }`);