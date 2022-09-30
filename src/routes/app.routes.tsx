import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import Vehicle from "../pages/vehicule/vehicule.page";
import Customer from "../pages/customer/customer.page";
import Rent from "../components/rent/rent.component";

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path="/vehicle" component={Vehicle} />
      <Route path="/customer" component={Customer} />
    </Routes>
  );
};

export default AppRoutes;
