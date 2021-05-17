import React, { FC } from "react";

interface ICard {
  src: string;
  name: string;
  catchPokemon?: () => void;
  isCaught: boolean;
  redirect?: () => void;
  date?: string;
}

export const Card: FC<ICard> = ({
  src,
  name,
  catchPokemon,
  isCaught,
  redirect,
  date,
}) => {
  return (
    <div className="card">
      <h2 className="card__title">{name}</h2>
      <img
        src={src}
        alt={name}
        className="card__img"
        width="160"
        height="160"
        onClick={redirect}
      />
      <div className="card__status">
        <button
          onClick={catchPokemon}
          disabled={isCaught}
          className="card__btn"
        >
          catch
        </button>
        {isCaught && <p className="card__info">Caught</p>}
      </div>
      {date && <time className="card__date">Catch time: {date}</time>}
    </div>
  );
};
