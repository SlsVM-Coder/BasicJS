// import { heroes } from './data/heroes'; importado normal
// import {heroes} from './data/heroes' importado con el shothand imp

import { heroes } from './data/heroes';

const getHeroeById = id => heroes.find( heroes => heroes.id === id );
// console.log(heroes)
console.log( getHeroeById(1));


const getHeroByOwner = owner => heroes.find( heroes => heroes.owner === owner );
console.log(getHeroByOwner('DC'))