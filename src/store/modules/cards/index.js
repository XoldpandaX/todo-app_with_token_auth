import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import { defaultState } from './const.js';

const state = {
  ...defaultState
};

export default {
  namespaced: true,

  state,
  actions,
  mutations,
  getters
};
