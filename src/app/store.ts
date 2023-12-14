import { configureStore } from '@reduxjs/toolkit';
import { loadState, storeState } from '../lib/local-storage';
import { rootReducer } from './rootReducer';

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();

  storeState({
    settings: state.settings,
    library: state.library,
    // book: state.book,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
