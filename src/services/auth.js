import LOCALSTORAGE from '../constants/localsorage';
import PATHS from '../constants/routes';
import driverSwitch from './driver';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const auth = {
  isAuthenticated: JSON.parse(localStorage.getItem(LOCALSTORAGE.AUTH)) || false,
  login(token) {
    localStorage.setItem(LOCALSTORAGE.AUTH, true);
    this.isAuthenticated = JSON.parse(localStorage.getItem(LOCALSTORAGE.AUTH));
    localStorage.setItem(LOCALSTORAGE.TOKEN, token);
  },
  logout() {
    localStorage.setItem(LOCALSTORAGE.AUTH, false);
    this.isAuthenticated = JSON.parse(localStorage.getItem(LOCALSTORAGE.AUTH));
    localStorage.removeItem(LOCALSTORAGE.TOKEN);
    driverSwitch.checkedClear();
    history.push(PATHS.INDEX);
    history.go(0);
  },
  parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
};

export default auth;