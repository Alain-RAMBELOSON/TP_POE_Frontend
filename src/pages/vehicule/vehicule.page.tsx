import { createResource, For } from "solid-js";

import Entity from "../../enum/entity.enum";
import getEntities from "../../services/entities.read.service";
import Vehicule from "../../components/vehicle/vehicle.component";

const request = {
  entity: Entity.Vehicle,
};

export default function VehiclePage() {
  const [getVehicles] = createResource(request, getEntities);

  return (
    <>
      <div>Vehicule Page</div>
      <For each={getVehicles()} fallback={<div>Loading...</div>}>
        {(vehicule) => <Vehicule vehicule={vehicule} />}
      </For>
    </>
  );
}
