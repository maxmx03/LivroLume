import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadState, storeState } from '../lib/local-storage';
import settingsReducer from '../features/settings/settings-reducer';

const persistedState = loadState();

export const rootReducer = combineReducers({
  settings: settingsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();

  storeState({
    // library: state.library,
    // book: state.book,
    settings: state.settings,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
