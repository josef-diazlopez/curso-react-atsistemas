import { createSelector } from 'reselect';

const getFlow = (state) => state.flow;

export const flowSelector = createSelector([getFlow], (flow) => flow);