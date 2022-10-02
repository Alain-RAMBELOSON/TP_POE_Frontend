import { Component, JSX } from "solid-js";
import { Navbar } from "../navbar/navbar.component";
import { AppRoutes } from "../../routes/app.routes";

const App: Component = (): JSX.Element => {
  return (
    <>
      <h1>Rent</h1>
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
    </>
  );
};

export { App };
