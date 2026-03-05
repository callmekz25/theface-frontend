import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages';
import MainLayout from '@/layout/main-layout';
import { DEFAULT } from '@/constants/routes-constants';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: DEFAULT,
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
