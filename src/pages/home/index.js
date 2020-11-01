import React from "react";
import PropTypes from "prop-types";

export default function Home({
  temps,
  chars,
  murders,
  onTempClick,
  onCharClick,
  onMurderClick,
}) {
  return (
    <div>
      <div>
        <h1>Temporadas</h1>
      </div>
      <div>
        <ul>
          {temps.map((temp) => (
            <li>
              <a href="#" key={temp.temp} onClick={() => onTempClick(temp.temp)}>
                {temp.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Personajes</h1>
      </div>
      <div>
        <ul>
          {chars.map((char) => (
            <li>
              <a key={char.char_id} href="#" onClick={() => onCharClick(char.char_id)}>
                {char.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Asesinos</h1>
      </div>
      <div>
        <ul>
          {murders.map((murder) => (
            <li>
              <a key={murder.name} href="#" onClick={() => onMurderClick(murder.name)}>
                {murder.name} {'->'} {murder.count}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
