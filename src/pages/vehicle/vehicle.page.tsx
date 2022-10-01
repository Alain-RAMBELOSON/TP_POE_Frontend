import { createResource, For } from "solid-js";

import Entity from "../../enum/entity.enum";
import getEntities from "../../services/entities.read.service";
import Vehicle from "../../components/vehicle/vehicle.component";

export default function VehiclePage() {

  const request = {
    entity: Entity.Vehicle,
  };

  const [getVehicles] = createResource(request, getEntities);

  return (
    <>
      <div>Vehicule Page</div>
      <For each={getVehicles()} fallback={<div>Loading...</div>}>
        {(vehicle) => <Vehicle vehicle={vehicle} />}
      </For>
    </>
  );
}
