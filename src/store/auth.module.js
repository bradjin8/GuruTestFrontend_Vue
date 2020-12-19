import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_USER = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";

import {API_URL} from '../common/config';
const url = API_URL + '/api/v1/';

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      let tempToken = "e23m30ewrtr3e3df3des3dfdfd3ery76895"
      localStorage.setItem('authUser', tempToken)
      context.commit(SET_AUTH, tempToken)
      resolve(
        tempToken
      );

      ApiService.post(url + "login", credentials)
        .then(res => {
            if (res['data']['success'] === true) {
                localStorage.setItem('authUser', res['data']['token']);
                context.commit(SET_AUTH, res['data']['token']);
                resolve(res['data']['token']);
            } else {
              window.alert(res['data']['msg'])
            }
        })
        .catch(error => console.log(error.message));
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise(() => {
      ApiService.post(url + 'register', { user: credentials })
        .then(res => {
          console.log('success => ', res)
        })
        .catch(error => console.log('error => ',error.message));
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("verify")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = { email, username, bio, image };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
