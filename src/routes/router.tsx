import { createBrowserRouter } from 'react-router-dom';
import RootPage from './root-page';
import AboutProject from './about-project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <AboutProject />,
      },
    ],
  },
]);

export default router;
