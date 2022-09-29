import type { Component } from "solid-js";

import Navbar from "../navbar/navbar.component";
import AppRoutes from "../../routes/app.routes";

const App: Component = () => {
  return (
    <>
      <h1>Rent</h1>
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
    </>
  );
};

export default App;
