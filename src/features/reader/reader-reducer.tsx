import { createSlice } from '@reduxjs/toolkit';

type Reader = {
  filePath: string;
};

const initialState: Reader = {
  filePath: '',
};

const readerSlice = createSlice({
  name: 'reader',
  initialState,
  reducers: {
    setFilePath: (state, action) => {
      state.filePath = action.payload;
    },
  },
  selectors: {
    selectFilePath: (state) => state.filePath,
  },
});

export const { setFilePath } = readerSlice.actions;
export const { selectFilePath } = readerSlice.selectors;

export default readerSlice.reducer;
