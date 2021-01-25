import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe)
//    }, 2000);
// });

// promesa.then((heroe) => {
//    console.log('heroe', heroe)
// });
// // .catch (err => console.warn(err));


const getHeroeByIdAsync = id => {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
         const heroe = getHeroeById(id);
         heroe ? resolve(heroe) : reject('Heroe no encontrado');
      }, 2000);
   });   
}

getHeroeByIdAsync(1)
   .then( console.log )
   .catch( console.warn );