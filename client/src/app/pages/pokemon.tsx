import React from "react";
import { useParams } from "react-router-dom";
import { Pokemon as PokemonCard } from "../bus/pokemon";

export const Pokemon = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="pokemon-page">
      <PokemonCard id={id} />
    </div>
  );
};
