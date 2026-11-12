import { createBrowserRouter } from 'react-router';

import HomePage from '~/pages/Home/HomePage';
import ContactsPage from '~/pages/Contacts/ContactsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/contacts',
    Component: ContactsPage,
  },
  // {
  //   path: '*',
  //   Component: NotFoundPage,
  // },
]);