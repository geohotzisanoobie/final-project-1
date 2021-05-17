import { pokemonsActions } from "../pokemons/actions";

export const catchPokemon = (dispatch: any) => (id: string) => {
  dispatch(pokemonsActions.patchAsync(id));
};
