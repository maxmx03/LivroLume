import { EntityId, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Book = {
  id: EntityId;
  title: string;
  description: string;
  creator: string;
  publisher: string;
  pubdate: string;
  location: string | number;
  filePath: string;
  cover: string;
  isPageMarked: boolean;
};

const libraryEntity = createEntityAdapter<Book>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const librarySlicer = createSlice({
  name: 'library',
  initialState: libraryEntity.getInitialState(),
  reducers: {
    libraryAddOne: libraryEntity.addOne,
    libraryAddMany: libraryEntity.addMany,
    libraryUpdateOne: libraryEntity.updateOne,
    libraryDeleteOne: libraryEntity.removeOne,
    libraryRemoveAll: libraryEntity.removeAll,
  },
});

export const {
  libraryAddOne,
  libraryAddMany,
  libraryUpdateOne,
  libraryDeleteOne,
  libraryRemoveAll,
} = librarySlicer.actions;

export const librarySelector = libraryEntity.getSelectors<RootState>(
  (state) => state.library
);

export default librarySlicer.reducer;
