import { format } from "path";
import React, { FunctionComponent, useState } from "react";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import Pokemon from "../models/pokemon";
import "./pokemon-card.css";
import { useHistory } from 'react-router-dom'

// nouveau type
type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = "#e15", // valeur par defaut
}) => {

  const [color, setColor] = useState<string>();
  // recup historique du nvigateur
  const history = useHistory();

  const goToPokemon = (id: number) => {
    // redirection
    history.push(`/pokemons/${id}`)
  }

  // fonction evenement
  const showBorder = () => {
    setColor(borderColor);
  };
  const hideBorder = () => {
    setColor("#f5f5f5");
  };


  return (
    // evenement
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
      onClick={() => {goToPokemon(pokemon.id)}}
    >
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
              {pokemon.types.map(type => (
                <span key={type} className={formatType(type)}>{type}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
