// import { heroes } from './data/heroes'; importado normal
// import {heroes} from './data/heroes' importado con el shothand imp
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes'

// console.log(owners);

export const getHeroeById = id => heroes.find(heroes => heroes.id === id);
// console.log(heroes)
// console.log(getHeroeById(1));

export const getHeroByOwner = owner => heroes.filter(heroes => heroes.owner === owner);
// console.log(getHeroByOwner('DC'));
