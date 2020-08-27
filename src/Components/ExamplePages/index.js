import React from "react";
import withAuthorization from "../Authorization";
import * as CONSTANTS from "../../Constants";
import Login from "../Login";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const DashboardFallback = () => (
  <div>You do not have permission to access the Dashboard.</div>
);
const Dashboard = ({ text = "" }) => <div>Dashboard {text}</div>;
const DashboardWithAuthorization = withAuthorization(
  Dashboard,
  CONSTANTS.DASHBOARD_AUTH_KEY,
  DashboardFallback
);

const Profile = () => <div>Profile</div>;
const ProfileWithAuthorization = withAuthorization(
  Profile,
  CONSTANTS.IS_LOGGED_IN,
  Login
);

export {
  Home,
  About,
  DashboardWithAuthorization as Dashboard,
  ProfileWithAuthorization as Profile
};
