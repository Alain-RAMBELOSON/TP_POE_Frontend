import { Component, createSignal, JSX, onMount } from "solid-js";
import { Card } from "../card/card.component";
import { EEntity } from "../../entities/list.entities";
import { IVehicleBody } from "../../bodies/vehicle.body";
import { TVehicle } from "../../types/vehicle.type";
import { PVehicle } from "../../props/vehicle.props";
import { getEntityByID } from "../../services/entity.read.service";

const Vehicle: Component<PVehicle> = (props): JSX.Element => {
  const body: IVehicleBody = {
    entity: EEntity.Vehicle,
    _id: props.vehicle._id,
  };

  const [getVehicle, setVehicle] = createSignal<TVehicle>({} as TVehicle);

  onMount(async () => {
    const response = await getEntityByID(body);
    console.log("Vehicle Component : onMount");
    console.log(response);
    setVehicle(response);
  });

  return (
    <>
      <Card type={EEntity.Vehicle} entity={getVehicle()} />
    </>
  );
};

export { Vehicle };
