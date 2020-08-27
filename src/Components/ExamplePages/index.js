import React from "react";
import withAuthorization from "../Authorization";
import { DASHBOARD_AUTH_KEY } from "../../Constants";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const DashboardFallback = () => (
  <div>You do not have permission to access the Dashboard.</div>
);
const Dashboard = ({ text = "" }) => <div>Dashboard {text}</div>;

const DashboardWithAuthorization = withAuthorization(
  Dashboard,
  DASHBOARD_AUTH_KEY,
  DashboardFallback
);

export { Home, About, DashboardWithAuthorization as Dashboard };
