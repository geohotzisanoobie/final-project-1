import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonActions } from "../actions";
import { catchPokemon } from "../../shared";

export const useFetchPokemon = (id: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonActions.fetchAsync(id));
  }, [dispatch]);

  const { data, isFetching, error } = useSelector(
    (state: any) => state.pokemon
  );

  const catchPokemonHandler = (id: string) => {
    dispatch(pokemonActions.patchAsync(id));
  };

  return {
    data,
    isFetching,
    error,
    catchPokemonHandler,
  };
};
