import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/main-layout';
import {
  COLLECTION_DETAIL,
  DEFAULT,
  PRODUCT_DETAIL,
} from '@/constants/routes-constants';
import ProductDetail from '@/pages/products/product-detail';
import Index from '@/pages/home/index';
import { CollectionDetail } from '@/pages/products/collection-detail';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: DEFAULT,
        index: true,
        element: <Index />,
      },
      {
        path: PRODUCT_DETAIL,
        element: <ProductDetail />,
      },
      {
        path: COLLECTION_DETAIL,
        element: <CollectionDetail />,
      },
    ],
  },
]);
