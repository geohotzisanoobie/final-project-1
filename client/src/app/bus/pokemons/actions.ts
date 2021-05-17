import { pokemonsTypes, IPokemon } from "./types";
import { api } from "../../api";
import { root } from "../../api/config";

export const pokemonsActions = {
  startFetching() {
    return {
      type: pokemonsTypes.POKEMONS_START_FETCHING,
    };
  },
  stopFetching() {
    return {
      type: pokemonsTypes.POKEMONS_STOP_FETCHING,
    };
  },
  fill(payload: IPokemon[]) {
    return {
      type: pokemonsTypes.POKEMONS_FILL,
      payload,
    };
  },
  fetchingError(error: { status: number }) {
    return {
      type: pokemonsTypes.POKEMONS_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },

  fetchAsync: (limit: number, offset: number) => async (dispatch: any) => {
    dispatch(pokemonsActions.startFetching());

    const response = await api.pokemons.fetch(limit, offset);

    if (response.status === 200) {
      const pokemons = await response.json();

      console.log(pokemons);

      const results = pokemons.map((pokemon: IPokemon, i: number) => ({
        ...pokemon,
        image: `${root}/assets/images/${i + 1}.png`,
        isCaught: pokemon.isCaught ? true : false,
      }));

      dispatch(pokemonsActions.fill(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(pokemonsActions.fetchingError(error));
    }
    dispatch(pokemonsActions.stopFetching());
  },

  patchAsync: (id: string, lastElId: number) => async (dispatch: any) => {
    const response = await api.pokemon.patch(id);

    if (response.status === 200) {
      dispatch(pokemonsActions.fetchAsync(lastElId, 0));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(pokemonsActions.fetchingError(error));
    }
  },

  fetchCaughtAsync: () => async (dispatch: any) => {
    dispatch(pokemonsActions.startFetching());

    const response = await api.pokemons.fetch(1118, 0);

    if (response.status === 200) {
      const pokemons = await response.json();

      const results = pokemons
        .filter((pokemon: IPokemon) => pokemon.isCaught === true)
        .map((pokemon: IPokemon) => ({
          ...pokemon,
          image: `${root}/assets/images/${pokemon.id}.png`,
          isCaught: pokemon.isCaught ? true : false,
        }));

      console.log("aaaaa", { results });

      dispatch(pokemonsActions.fill(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(pokemonsActions.fetchingError(error));
    }
    dispatch(pokemonsActions.stopFetching());
  },
} as const;
