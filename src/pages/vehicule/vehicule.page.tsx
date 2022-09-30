import { Component, createResource } from "solid-js";

import * as config from "../../config.json";
import { getItemByID } from "../../services/entity.read.service";

("63340fb3d817b5ae8fe4bcd8");

const request = {
  entity: "Vehicle",
  url: config.api.getVehicleByID,
  id: "63340fb3d817b5ae8fe4bcd8",
  body: [],
};

const VehiclePage: Component = () => {
  const [todos] = createResource(request, getItemByID);
  return <div>My{JSON.stringify(todos(), null, 2)}</div>;
};

export default VehiclePage;
