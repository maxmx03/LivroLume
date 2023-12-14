import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from '../features/settings/settings-reducer';
import libraryReducer from '../features/library/library-reducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  library: libraryReducer,
  // book: bookReducer,
});
