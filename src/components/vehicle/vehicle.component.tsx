import { createResource } from "solid-js";
import Entity from "../../enum/entity.enum";
import getEntityByID from "../../services/entity.read.service";
import Card from "../card/card.component";

export default function Vehicle(props: any) {
  console.log("Vehicle Component", props.vehicle);

  const request = {
    entity: Entity.Vehicle,
    _id: props.vehicle._id,
  };

  const [getVehicle] = createResource(request, getEntityByID);

  return (
    <>
      <Card type={Entity.Vehicle} entity={props.vehicle} />
    </>
  );
}
