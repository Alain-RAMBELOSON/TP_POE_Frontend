import { Component, createResource, For } from "solid-js";

import * as config from "../../config.json";
import Entity from "../../enum/entity.enum";
import getEntities from "../../services/entity.read.service";
import Vehicle from "../../components/vehicle/vehicle.component";

const request = {
  entity: Entity.Vehicle,
  url: config.api.getVehicleByID,
  id: "",
  body: {},
};

const VehiclePage: Component = () => {
  const [vehicles] = createResource(request, getEntities);
  return (
    <>
      <div>Vehicles : {JSON.stringify(vehicles(), null, 2)}</div>

      <For each={vehicles()} fallback={<div>Loading...</div>}>
        {(vehicle) => (
          <div>
            <Vehicle />
          </div>
        )}
      </For>
    </>
  );
};

export default VehiclePage;
