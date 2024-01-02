import { combineReducers } from '@reduxjs/toolkit';
import libraryReducer from '../features/library/library-reducer';
import readerReducer from '../features/reader/reader-reducer';
import settingsReducer from '../features/settings/settings-reducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  library: libraryReducer,
  reader: readerReducer,
});
