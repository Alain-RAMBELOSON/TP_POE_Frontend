import { Component, createResource, For } from "solid-js";

import Entity from "../../enum/entity.enum";
import getEntityByID from "../../services/entity.read.service";
import getEntities from "../../services/entities.read.service";
import Vehicule from "../../components/vehicle/vehicle.component";

const requestEntity = {
  entity: Entity.Vehicle,
  id: "63340fb3d817b5ae8fe4bcd8",
};

const requestEntities = {
  entity: Entity.Vehicle,
};

export default function VehiclePage() {
  const [getVehicle] = createResource(requestEntity, getEntityByID);
  const [getVehicles] = createResource(requestEntities, getEntities);

  return (
    <>
      <div>Vehicle :</div>
      <div>{JSON.stringify(getVehicle(), null, 2)}</div>
      <div>Vehicles :</div>
      <div>{JSON.stringify(getVehicles(), null, 2)}</div>

      <For each={getVehicles()} fallback={<div>Loading...</div>}>
        {(vehicule) => <Vehicule prop="prop" />}
      </For>
    </>
  );
}
