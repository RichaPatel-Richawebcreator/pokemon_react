import { useState, useEffect } from "react";
import { PokemonCards } from "./PokemonCards";
import "./index.css";

export const Pokemon = () => {
  const [pockemon, setPockemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  const fetchPockemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const pockemonData = data.results.map(async (pockemon) => {
        const res = await fetch(pockemon.url);
        const data = await res.json();
        console.log(pockemonData.length);
        return data;
      });
      const detailedResponse = await Promise.all(pockemonData);
      console.log(detailedResponse);
      setPockemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPockemon();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // search functionality

  const searchData = pockemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            onChange={handleInputChange}
            value={search}
          />
        </div>
        <ul className="cards">
          {/* {pockemon.map((currPockemon) => { */}
          {searchData.map((currPockemon) => {
            return (
              <PokemonCards key={currPockemon.id} pokemonData={currPockemon} />
            );
          })}
        </ul>
      </section>
    </>
  );
};
