import { createSlice } from '@reduxjs/toolkit';
import { Themes } from '../../theme';

type Settings = {
  font: string;
  theme: Themes;
};

const initialState: Settings = {
  font: '',
  theme: 'theme',
};

const settingsSlicer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setFont: (state, action) => {
      state.font = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    selectFont: (state) => state.font,
    selectTheme: (state) => state.theme,
  },
});

export const { setFont, setTheme } = settingsSlicer.actions;
export const { selectFont, selectTheme } = settingsSlicer.selectors

export default settingsSlicer.reducer;
