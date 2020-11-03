const FLOW_MODULE = "[FLOW_MODULE]";
export const INIT = `${FLOW_MODULE}INIT`;
export const INIT_HOME = `${FLOW_MODULE}INIT_HOME`;
export const INIT_EPISODE = `${FLOW_MODULE}INIT_EPISODE`;
export const INIT_EPISODE_LIST = `${FLOW_MODULE}INIT_EPISODE_LIST`;

export function initHome() {
  return {
    type: INIT_HOME,
  };
}

export function initApp() {
  return {
    type: INIT,
  };
}

export function initEpisode() {
  return {
    type: INIT_EPISODE,
  };
}

export function initEpisodeList() {
  return {
    type: INIT_EPISODE_LIST,
  };
}
