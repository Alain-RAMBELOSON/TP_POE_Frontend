import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import Vehicle from "../components/vehicle/vehicle.component";
import Customer from "../components/customer/customer.component";
import Rent from "../components/rent/rent.component";

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path="/vehicle" component={Vehicle} />
      <Route path="/customer" component={Customer} />
      <Route path="/rent" component={Rent} />
    </Routes>
  );
};

export default AppRoutes;
