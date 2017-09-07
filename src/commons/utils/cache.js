import { AsyncStorage } from 'react-native';
import { call } from 'redux-saga/effects';

import LRU from './lru';

let memory = new LRU();

const cache = {
  set: (key, value) => {
    memory[key] = value;
    return cache.memory;
  },
  get: key => {
    return memory[key];
  },
  remove: key => {
    delete memory[key];
    return cache.memory;
  },
  clear: () => {
    memory = new LRU();
    return cache.memory;
  },
  store: {
    set: (key, value) => {
      AsyncStorage.setItem(key, JSON.stringify(value), error => {
        error && console.error(error);
      });
    },
    get: function* get(key) {
      const value = yield call(AsyncStorage.getItem, key);
      return JSON.parse(value);
    },
    remove: key => {
      AsyncStorage.removeItem(key, error => {
        error && console.error(error);
      });
    },
    clear: () => {
      AsyncStorage.clear(error => {
        error && console.error(error);
      });
    },
  },
};

export default cache;
