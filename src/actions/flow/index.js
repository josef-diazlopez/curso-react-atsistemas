const FLOW_MODULE = '[FLOW_MODULE]';
export const INIT = `${FLOW_MODULE}INIT`;
export const INIT_HOME = `${FLOW_MODULE}INIT_HOME`;


export function initHome(){
    return {
        type: INIT_HOME
    }
}

export function initApp() {
    return {
      type: INIT
    };
  }