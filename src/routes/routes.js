import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Folowing from '~/pages/Folowing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.folowing, component: Folowing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
