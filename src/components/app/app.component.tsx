import { Component, JSX } from "solid-js";
import { HeaderNavBar } from "../header-navbar/header-navbar.component";
import { AppRoutes } from "../../routes/app.routes";
import "./styles/app.styles.css";

const App: Component = (): JSX.Element => {
  return (
    <>
      <HeaderNavBar></HeaderNavBar>
      <AppRoutes></AppRoutes>
    </>
  );
};

export { App };
