import React, { FC } from "react";
import { useFetchPokemon } from "./hooks/useFetchPokemon";
import Loader from "react-loader-spinner";
import { Card } from "../../ui/card/card";

interface IPokemonProps {
  id: string;
}

export const Pokemon: FC<IPokemonProps> = ({ id }) => {
  const { data, isFetching, error, catchPokemonHandler } = useFetchPokemon(id);
  console.log(data);

  const loaderJsx = isFetching && (
    <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );

  const errorJsx = error && <h1>Server error</h1>;

  const pokemonJsx = data && (
    <div className="pokemon-profile">
      <Card
        src={data.image}
        name={data.name}
        isCaught={data.isCaught}
        date={data.date}
        catchPokemon={() => catchPokemonHandler(data.id)}
      />
    </div>
  );

  return (
    <>
      {loaderJsx}
      {errorJsx}
      {pokemonJsx}
    </>
  );
};
