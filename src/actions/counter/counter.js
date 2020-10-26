const MODULE_ID = "@COUNTER/";

export const INCREMENT = `${MODULE_ID}INCREMENT`;
export const DECREMENT = `${MODULE_ID}DECREMENT`;

export const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
