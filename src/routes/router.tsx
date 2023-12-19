import { createBrowserRouter, redirect } from 'react-router-dom';
import RootPage from './root-page';
import AboutProject from './about-project';
import ErrorPage from './error-page';
import { libraryRoute, readerRoute, settingsRoute } from '../constants/routes';
import LibraryPage from './library-page';
import {
  libraryAddMany,
  libraryAddOne,
  libraryDeleteOne,
  librarySelector,
  libraryUpdateOne,
} from '../features/library/library-reducer';
import { store } from '../app/store';
import { convertFilePathToUrl, getBook, getFile } from '../lib/lume-api';
import { setFilePath } from '../features/reader/reader-reducer';
import ReaderPage from './reader-page';
import { EntityId } from '@reduxjs/toolkit';
import SettingsPage from './settings-page';

const getState = store.getState;
const dispatch = store.dispatch;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutProject />,
      },
      {
        path: libraryRoute.baseUrl,
        element: <LibraryPage />,
        loader: () => {
          const books = librarySelector.selectAll(getState());

          return books;
        },
      },
      {
        path: libraryRoute.add.url(),
        element: <LibraryPage />,
        action: async () => {
          const selected = await getFile();

          if (Array.isArray(selected)) {
            const promises = selected.map((filePath) => getBook(filePath));
            const books = await Promise.all(promises);
            dispatch(libraryAddMany(books));
          } else if (selected !== null) {
            const book = await getBook(selected);
            dispatch(libraryAddOne(book));
          }

          return redirect(libraryRoute.baseUrl);
        },
      },
      {
        path: libraryRoute.read.url(),
        action: async ({ request }) => {
          const formData = await request.formData();
          const filePath = formData.get('filePath');

          dispatch(setFilePath(filePath));

          return redirect(readerRoute.baseUrl);
        },
      },
      {
        path: libraryRoute.delete.url(),
        action: async ({ request }) => {
          const formData = await request.formData();
          const filePath = formData.get('filePath') as EntityId;

          dispatch(libraryDeleteOne(filePath));

          return redirect(libraryRoute.baseUrl);
        },
      },
      {
        path: readerRoute.baseUrl,
        element: <ReaderPage />,
        loader: async () => {
          const filePath = getState().reader.filePath;
          const book = librarySelector.selectById(getState(), filePath);
          const url = await convertFilePathToUrl(filePath);

          return { url, book };
        },
      },
      {
        path: readerRoute.edit.url(),
        action: async ({ request }) => {
          const formData = await request.formData();
          const bookId = formData.get('bookId') as EntityId;
          const location = formData.get('location') as number | string;
          const book = librarySelector.selectById(getState(), bookId);

          const dispatchUpdateLibraryOne = (
            location: number | string,
            isPageMarked: boolean
          ) => {
            dispatch(
              libraryUpdateOne({
                id: bookId,
                changes: {
                  location,
                  isPageMarked,
                },
              })
            );
          };

          const setBookMarkTrue = (location: number | string) => {
            dispatchUpdateLibraryOne(location, true);
          };
          const setBookMarkFalse = (location: number | string) => {
            dispatchUpdateLibraryOne(location, false);
          };

          if (book.location !== location) {
            setBookMarkTrue(location);
          } else {
            setBookMarkFalse(0);
          }

          return redirect(readerRoute.baseUrl);
        },
      },
      {
        path: settingsRoute.baseUrl,
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
