export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.home.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Hight: </span>
          {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span>Width: </span>
          {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span>Speed: </span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span>Experience: </span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack: </span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1) //to get only one data
              .join(", ")}
          </p>
          <span>Abilities: </span>
        </div>
      </div>
    </li>
  );
};
