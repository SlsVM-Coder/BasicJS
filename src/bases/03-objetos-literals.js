

const persona = {
   nombre: 'Silas',
   apellido: 'Valle',
   edad: 30,
   direccion: {
      ciudad:'New York',
      zip: 6950,
      lat: 14.2342,
      lng: 34.12235
   }
}

// console.table( persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);