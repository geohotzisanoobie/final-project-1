import { pokemonTypes } from "./types";
import { api } from "../../api";
import { root } from "../../api/config";

export const pokemonActions = {
  startFetching() {
    return {
      type: pokemonTypes.POKEMON_START_FETCHING,
    };
  },
  stopFetching() {
    return {
      type: pokemonTypes.POKEMON_STOP_FETCHING,
    };
  },
  fill(payload: any) {
    return {
      type: pokemonTypes.POKEMON_FILL,
      payload,
    };
  },
  fetchingError(error: { status: number }) {
    return {
      type: pokemonTypes.POKEMON_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },

  fetchAsync: (id: string) => async (dispatch: any) => {
    dispatch(pokemonActions.startFetching());

    const response = await api.pokemon.fetch(id);

    if (response.status === 200) {
      let pokemon = await response.json();

      pokemon = {
        ...pokemon,
        image: `${root}/assets/images/${id}.png`,
      };

      dispatch(pokemonActions.fill(pokemon));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(pokemonActions.fetchingError(error));
    }
    dispatch(pokemonActions.stopFetching());
  },
  patchAsync: (id: string) => async (dispatch: any) => {
    const response = await api.pokemon.patch(id);

    if (response.status === 200) {
      dispatch(pokemonActions.fetchAsync(id));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(pokemonActions.fetchingError(error));
    }
  },
} as const;
