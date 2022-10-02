import { Component, createSignal, For, JSX, onMount } from "solid-js";
import { IVehicleBody } from "../../bodies/vehicle.body";
import { EEntity } from "../../entities/list.entities";
import { getEntities } from "../../services/entities.read.service";
import { Vehicle } from "../../components/vehicle/vehicle.component";
import { TVehicle } from "../../types/vehicle.type";

const VehiclePage: Component = (): JSX.Element => {
  const body: IVehicleBody = {
    entity: EEntity.Vehicle,
  };

  const [getVehicles, setVehicles] = createSignal<TVehicle[]>([]);

  onMount(async () => {
    const response = await getEntities(body);
    console.log("Vehicle Page : onMount");
    console.log(response);
    setVehicles(response);
  });

  return (
    <>
      <h2>Vehicule Page</h2>
      <For each={getVehicles()}>
        {(vehicle: TVehicle) => <Vehicle vehicle={vehicle} />}
      </For>
    </>
  );
};

export { VehiclePage };
