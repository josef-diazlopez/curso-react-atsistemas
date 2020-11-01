import { createSelector } from "reselect";
import { path } from "ramda";

const getTemps = (state) => {
  const episodes = path(["home", "data", "episodes"], state) || [];
  if (episodes.length > 0) {
    const epGB = groupBy(episodes, "season");
    return Object.keys(epGB).map((temp) => ({
      name: `Temporada ${temp}`,
      temp,
    }));
  }
  return [];
};

const getCharacters = (state) =>
  (path(["home", "data", "characters"], state) || []).map((char) => ({
    id: char.char_id,
    name: char.name,
  }));

const getMurders = (state) => {
  const deaths = path(["home", "data", "deaths"], state) || [];
  if (deaths.length > 0) {
    const deathsGB = groupBy(deaths, "responsible");
    const responsibles = Object.keys(deathsGB);
    console.log();
    const murders = responsibles.map((resp) => ({
      name: resp,
      count: deathsGB[resp]
        .map((val) => val.number_of_deaths)
        .reduce((prev, curr) => prev + curr),
    }));
    return murders.sort((a, b) => b.count - a.count);
  }
  return [];
};

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const tempSelector = createSelector([getTemps], (temps) => temps);

export const charSelector = createSelector([getCharacters], (chars) => chars);

export const murderSelector = createSelector(
  [getMurders],
  (murders) => murders
);
