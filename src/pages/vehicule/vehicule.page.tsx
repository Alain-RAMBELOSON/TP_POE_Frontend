import { Component, createResource } from "solid-js";

import * as config from "../../config.json";
import Entity from "../../enum/entity.enum";
import getEntities from "../../services/entity.read.service";

const request = {
  entity: Entity.Vehicle,
  url: config.api.getVehicleByID,
  id: "",
  body: {},
};

const VehiclePage: Component = () => {
  const [vehicles] = createResource(request, getEntities);
  return <div>Vehicles : {JSON.stringify(vehicles(), null, 2)}</div>;
};

export default VehiclePage;
