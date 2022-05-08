import {combineReducers} from 'redux';

/*
 * Import reducers
 */
import globalReducer from './globalReducer';

/**
 * Merges the main reducer with dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });

  return rootReducer;
}