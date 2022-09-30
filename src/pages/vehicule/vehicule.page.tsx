import { Component, createResource, For } from "solid-js";

import Entity from "../../enum/entity.enum";
import getEntityByID from "../../services/entity.read.service";
import getEntities from "../../services/entities.read.service";

const requestEntity = {
  entity: Entity.Vehicle,
  id: "63340fb3d817b5ae8fe4bcd8",
};

const requestEntities = {
  entity: Entity.Vehicle,
};

const VehiclePage: Component = () => {
  const [vehicle] = createResource(requestEntity, getEntityByID);
  const [vehicles] = createResource(requestEntities, getEntities);

  return (
    <>
      <div>Vehicle :</div>
      <div>{JSON.stringify(vehicle(), null, 2)}</div>
      <div>Vehicles :</div>
      <div>{JSON.stringify(vehicles(), null, 2)}</div>
    </>
  );
};

export default VehiclePage;
