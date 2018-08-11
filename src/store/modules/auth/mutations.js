import * as types from './mutation-types';

export default {
  [types.HANDLE_LOGIN] (state, token) {
    state.token = token;
  },
  
  [types.SAVE_USER_DATA] (state, userData) {
    state.user = userData;
  }
}