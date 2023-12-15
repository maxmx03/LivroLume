import { createBrowserRouter, redirect } from 'react-router-dom';
import RootPage from './root-page';
import AboutProject from './about-project';
import ErrorPage from './error-page';
import { libraryRoute, readerRoute } from '../constants/routes';
import LibraryPage from './library-page';
import {
  libraryAddMany,
  libraryAddOne,
  librarySelector,
} from '../features/library/library-reducer';
import { store } from '../app/store';
import { convertFilePathToUrl, getBook, getFile } from '../lib/lume-api';
import { setFilePath } from '../features/reader/reader-reducer';
import ReaderPage from './reader-page';

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
        element: <LibraryPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const filePath = formData.get('filePath');

          dispatch(setFilePath(filePath));

          return redirect(readerRoute.baseUrl);
        },
      },
      {
        path: readerRoute.baseUrl,
        element: <ReaderPage />,
        loader: async () => {
          const filePath = getState().reader.filePath;
          const url = await convertFilePathToUrl(filePath);

          return url;
        },
      },
    ],
  },
]);

export default router;
