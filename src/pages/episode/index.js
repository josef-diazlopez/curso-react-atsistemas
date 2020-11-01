import React from "react";

export default function Episode({
  title,
  season,
  epNumber,
  epDate,
  chars,
  quote,
  onCharSelec,
}) {
  return (
    <div>
      <div>
        <i>{quote}</i>
      </div>
      <div>
        <b>Titulo:</b> {title}
      </div>
      <div>
        <b>Temporada:</b> {season}
      </div>
      <div>
        <b>Numero:</b> {epNumber}
      </div>
      <div>
        <b>Fecha de estreno:</b> {epDate}
      </div>
      <div>
        <b>Personajes:</b> <br />
        <ul>
          {chars.map((character) => (
            <li onClick={() => onCharSelec(character.char_id)}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
