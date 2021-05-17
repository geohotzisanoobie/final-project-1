import React from "react";
import { useFetchPokemons } from "./hooks/useFetchPokemons";
import { Card } from "../../ui/card/card";
import Loader from "react-loader-spinner";

export const Pokemons = () => {
  const {
    data,
    isFetching,
    error,
    redirectToPokPageOnClick,
    setEl,
    catchPokemonHandler,
  } = useFetchPokemons(false);

  const loaderJsx = isFetching && (
    <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );

  const errorJsx = error && <h1>Server error</h1>;

  const pokemonsJsx = data && data.length && (
    <ul className="pokemons">
      {data.map(({ name, image, isCaught }: any, i: number) => (
        <li
          key={name}
          ref={setEl}
          className="pokemons__item"
          id={String(i + 1)}
        >
          <Card
            src={image}
            name={name}
            catchPokemon={() => catchPokemonHandler(`${i + 1}`)}
            isCaught={isCaught}
            redirect={() => redirectToPokPageOnClick(`${i + 1}`)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      {loaderJsx}
      {errorJsx}
      {pokemonsJsx}
    </div>
  );
};

export const CaughtPokemons = () => {
  const {
    data,
    isFetching,
    error,
    redirectToPokPageOnClick,
    catchPokemonHandler,
  } = useFetchPokemons(true);

  const loaderJsx = isFetching && (
    <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );

  const errorJsx = error && <h1>Server error</h1>;

  const pokemonsJsx = data && data.length && (
    <ul className="pokemons">
      {data.map(({ name, image, isCaught, id }: any) => (
        <li key={name} className="pokemons__item" id={id}>
          <Card
            src={image}
            name={name}
            catchPokemon={() => catchPokemonHandler(id)}
            isCaught={isCaught}
            redirect={() => redirectToPokPageOnClick(id)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      {loaderJsx}
      {errorJsx}
      {pokemonsJsx}
    </div>
  );
};
