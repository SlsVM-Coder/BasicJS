

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;
// console.log( p3 );


const retornaArreglo = () => {
   return ['ABCE', 123]
};
const [ letras, numeros ] = retornaArreglo();
// console.log( letras, numeros );

// TAREA
//  1. el primer valor del arr se llamara nombre
//  2. se llamara setNombre 
const useState = valor => ([ valor, () => console.log('Hola Mundo!')]);

const [ nombre, setNombre] = useState( 'Silas' );

console.log( nombre );
setNombre();


