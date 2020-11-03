import React from "react";
import PropTypes from "prop-types";

export default function EpisodeList({ tempName, episodes, onClickEpisode }) {
  return (
    <div>
      <h1>{tempName}</h1>
      <div>
        {episodes.map((ep) => (
          <div key={ep.episode_id}>
            <a href="#" onClick={() => onClickEpisode(ep).episode_id}>{ep.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}


