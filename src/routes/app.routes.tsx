import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import Vehicle from "../pages/vehicule/vehicule.page";
import Customer from "../pages/customer/customer.page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/vehicle" component={Vehicle} />
      <Route path="/customer" component={Customer} />
    </Routes>
  );
}
