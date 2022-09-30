import { createResource } from "solid-js";
import Entity from "../../enum/entity.enum";
import getEntityByID from "../../services/entity.read.service";

export default function Vehicule(props: any) {
  const request = {
    entity: Entity.Vehicle,
    _id: props.vehicule._id,
  };

  const [getVehicule] = createResource(request, getEntityByID);

  return (
    <>
      <div>Vehicule</div>
      <div>{JSON.stringify(getVehicule(), null, 2)}</div>
    </>
  );
}
