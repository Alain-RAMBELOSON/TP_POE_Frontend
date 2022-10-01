import { Routes, Route } from "@solidjs/router";

import VehiclePage from "../pages/vehicule/vehicule.page";
import CustomerPage from "../pages/customer/customer.page";
import RentPage from "../pages/rent/rent.page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" component={VehiclePage} />
      <Route path="/customer" component={CustomerPage} />
      <Route path="/vehicle" component={VehiclePage} />
      <Route path="/rent" component={RentPage} />
    </Routes>
  );
}
