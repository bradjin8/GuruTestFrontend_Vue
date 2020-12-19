import objectPath from "object-path";
import config from "@/common/config/layout.config.json";

// action types
export const SET_LAYOUT_CONFIG = "setLayoutConfig";
export const OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig";

// mutation types

export default {
  state: {
    config: config
  },
  getters: {
    /**
     * Get config from layout config
     * @param state
     * @returns {function(path, defaultValue): *}
     */
    layoutConfig: state => (path, defaultValue) => {
      return objectPath.get(state.config, path, defaultValue);
    }
  },
  actions: {
    [SET_LAYOUT_CONFIG](state, payload) {
      state.commit(SET_LAYOUT_CONFIG, payload);
    },
    [OVERRIDE_LAYOUT_CONFIG](state) {
      state.commit(OVERRIDE_LAYOUT_CONFIG);
    }
  },
  mutations: {
    [SET_LAYOUT_CONFIG](state, payload) {
      state.config = payload;
    },
    [OVERRIDE_LAYOUT_CONFIG](state) {
      state.config = Object.assign(
        {},
        state.config,
        JSON.parse(localStorage.getItem("config"))
      );
    }
  }
};
