import { Component, createSignal, onMount } from "solid-js";
import { Card } from "../card/card.component";
import { EEntity } from "../../enum/entity.enum";
import { IRequest } from "../../interfaces/request.interface";
import { IVehicle } from "../../interfaces/vehicle.interface";
import { PVehicle } from "../../props/vehicle.props";
import { getEntityByID } from "../../services/entity.read.service";

const Vehicle: Component<PVehicle> = (props) => {
  const request: IRequest = {
    entity: EEntity.Vehicle,
    _id: props.vehicle._id,
  };

  const [getVehicle, setVehicle] = createSignal<IVehicle>({} as IVehicle);

  onMount(async () => {
    const response = await getEntityByID(request);
    console.log("Vehicle Component", response);
    setVehicle(response);
  });

  return (
    <>
      <Card type={EEntity.Vehicle} entity={getVehicle()} />
    </>
  );
};

export { Vehicle };
