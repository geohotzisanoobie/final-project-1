import { root } from "./config";

export const api = {
  pokemons: {
    fetch(limit: number, offset: number) {
      return fetch(`${root}/pokemons?_start=${offset}&_limit=${limit}`);
    },
  },
  pokemon: {
    fetch(id: string) {
      return fetch(`${root}/pokemons/${id}`);
    },
    patch(id: string) {
      return fetch(`${root}/pokemons/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCaught: true,
          date: new Date().toLocaleString("us-US"),
        }),
      });
    },
  },
} as const;
