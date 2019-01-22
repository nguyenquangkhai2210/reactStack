import Starter from '../component/starter.jsx';
import { store } from '../../../store';
import { startReducer } from '../component/starter.reducer.js';

const STARTER_STORE = "STARTER_STORE";

const ThemeRoutes = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: 'ti-loop',
    component: Starter,
    preProcess: () => store.injectReducer(STARTER_STORE, startReducer)
  },
  {
    path: '/admin/alert',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: Starter
  },
  {
    path: '/admin/badge',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component: Starter
  },
  {
    path: '/admin/button',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component: Starter
  },
  {
    path: '/admin/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component: Starter
  },
  {
    path: '/admin/grid',
    name: 'Grid',
    icon: 'mdi mdi-apps',
    component: Starter
  },
  {
    path: '/admin/pagination',
    name: 'Pagination',
    icon: 'mdi mdi-priority-high',
    component: Starter
  },
  {
    path: '/admin/popover',
    name: 'Popover',
    icon: 'mdi mdi-pencil-circle',
    component: Starter
  },
  {
    path: '/admin/ui-components/tooltip',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: Starter
  },
  {
    path: '/admin/viewProfile',
    name: 'View profile',
    icon: 'mdi mdi-credit-card-multiple',
    component: Starter
  },
  { path: '/admin', pathTo: '/admin/dashboard', name: 'Dashboard', redirect: true }
];

export default ThemeRoutes;
