import LandingPage from "views/LandingPage/LandingPage.jsx";
import WarmupPage from "views/WarmupPage/WarmupPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/warm-up-page", name: "WarmupPage", component: WarmupPage },
  { path: "/login-page", name: "ProfilePage", component: LoginPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
