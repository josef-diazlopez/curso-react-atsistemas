const FLOW_MODULE = '[FLOW_MODULE]';
export const INIT = `${FLOW_MODULE}INIT`;


export function initApp() {
    return {
      type: INIT
    };
  }