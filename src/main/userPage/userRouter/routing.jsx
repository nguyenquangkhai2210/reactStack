import Starter from '../component/starter.jsx';

const ThemeRoutes = [
  {
    path: '/user/dashboard',
    name: 'Dashboard',
    icon: 'ti-loop',
    component: Starter
  },
  {
    path: '/user/alert',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: Starter
  },
  {
    path: '/user/badge',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component: Starter
  },
  {
    path: '/user/button',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component: Starter
  },
  {
    path: '/user/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component: Starter
  },
  {
    path: '/user/grid',
    name: 'Grid',
    icon: 'mdi mdi-apps',
    component: Starter
  },
  {
    path: '/user/user/pagination',
    name: 'Pagination',
    icon: 'mdi mdi-priority-high',
    component: Starter
  },
  {
    path: '/user/popover',
    name: 'Popover',
    icon: 'mdi mdi-pencil-circle',
    component: Starter
  },
  {
    path: '/user/ui-components/tooltip',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: Starter
  },
  {
    path: '/user/viewProfile',
    name: 'View profile',
    icon: 'mdi mdi-credit-card-multiple',
    component: Starter
  },
  { path: '/user', pathTo: '/user/dashboard', name: 'Dashboard', redirect: true }
];

export default ThemeRoutes;
