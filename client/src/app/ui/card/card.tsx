import React, { FC } from "react";

interface ICard {
  src: string;
  name: string;
  catchPokemon?: () => void;
  isCaught: boolean;
  redirect?: () => void;
  date?: string;
  id?: string;
}

export const Card: FC<ICard> = ({
  src,
  name,
  catchPokemon,
  isCaught,
  redirect,
  date,
  id,
}) => {
  return (
    <div className="card">
      <h2 className="card__title">
        {name} {id && <span># {id}</span>}
      </h2>
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
