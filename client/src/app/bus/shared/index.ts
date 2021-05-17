import { pokemonsActions } from "../pokemons/actions";

export const catchPokemon =
  (dispatch: any, lastElId: number = 100) =>
  (id: string) => {
    dispatch(pokemonsActions.patchAsync(id, lastElId));
  };
