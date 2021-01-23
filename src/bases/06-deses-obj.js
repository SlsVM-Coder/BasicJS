

// Destructuracion 
//  Asignacion desestructurante

const persona = {
   nombre: 'Tony',
   edad: 45,
   clave: 'Iroman'
};

// const { clave, nombre, edad } = persona

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad, rango= 'Capitán' }) => (
   {
      nombreClave: clave,
      anios: edad,
      latng: {
         lat: 12.34523,
         lng: -12.2321
      }
   }
)

const { nombreClave, anios, latng: { lat, lng } } = useContext( persona );
console.log(nombreClave, anios);
console.log( lat, lng );