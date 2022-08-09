import React, { useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
  
const usePokemons = () =>{
    // on initaiale l'etat de notre composant avec un tableau vide par defaut
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // hook d'effet, setPokemon, tableau vide en seocnd parametre qui permet d'eviter de declancher le hook d'effet a chaque modif du composant
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return pokemons;
}
  
export default usePokemons;