import { createBrowserRouter } from 'react-router-dom';
import RootPage from './root-page';
import AboutProject from './about-project';
import ErrorPage from './error-page';

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
    ],
  },
]);

export default router;
