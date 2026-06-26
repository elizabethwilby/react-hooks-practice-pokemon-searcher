import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showFront, setShowFront] = useState(true);

  function handleClick() {
    setShowFront(!showFront);
  }

  const sprite = showFront ? pokemon.sprites.front : pokemon.sprites.back;
  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt={pokemon.name} src={sprite} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
