import { MarketPage } from '@/pages/MarketPage/MarketPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

export const routes = [
  {
    path: '/',
    element: <MarketPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  // other routes go here...
];
