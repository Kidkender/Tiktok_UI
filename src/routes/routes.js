import { HeaderOnly } from "~/layouts";
import config from "~/config";

//Page
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
import Explore from "~/pages/Explore";
import Login from "~/pages/Login";
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.live, component: Live },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.login, component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
