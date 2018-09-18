import * as types from './mutation-types.js';
import { getRandomID } from '../../../helpers';

function closeAllModals({ commit }) {
  commit(types.CLOSE_ALL_MODALS);
}

function showModal({ commit }, modalId) {
  switch(modalId) {
    case 'first-load-modal':
      if (!localStorage.getItem('wasHere')) {
        localStorage.setItem('wasHere', 'was');
        commit(types.SHOW_MODAL, modalId);
      }
      break;
    default:
      commit(types.SHOW_MODAL, modalId);
  }
}

function showNotification({ commit, dispatch, state }, notificationObj) {
  const timeout = 4000; // period of time for show notification
  const id = getRandomID(); // notification id
  
  notificationObj.id = id;
  commit(types.SHOW_NOTIFICATION, notificationObj);
  
  setTimeout(() => {
    dispatch('hideNotification', id);
  }, timeout);
}

function hideNotification({ commit }, notificationId) {
  commit(types.HIDE_NOTIFICATION, notificationId);
}

function toggleLoader({ commit }) {
  commit(types.TOGGLE_LOADER);
}

function changeNavigation({ commit }, userRole) {
  commit(types.CHANGE_NAVIGATION, userRole);
}

export default {
  closeAllModals,
  showModal,
  showNotification,
  hideNotification,
  toggleLoader,
  changeNavigation
};
