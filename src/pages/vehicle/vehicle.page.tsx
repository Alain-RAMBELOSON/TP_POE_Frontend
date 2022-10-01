import { Component, createSignal, For, onMount } from "solid-js";
import { EEntity } from "../../enum/entity.enum";
import { getEntities } from "../../services/entities.read.service";
import { Vehicle } from "../../components/vehicle/vehicle.component";
import { IVehicle } from "../../interfaces/vehicle.interface";

const VehiclePage: Component = () => {
  const request = {
    entity: EEntity.Vehicle,
  };

  const [getVehicles, setVehicles] = createSignal<IVehicle[]>([]);

  onMount(async () => {
    const response = await getEntities(request);
    console.log("VehiclePage", response);
    setVehicles(response);
  });

  return (
    <>
      <div>Vehicule Page</div>
      <For each={getVehicles()}>
        {(vehicle: IVehicle) => <Vehicle vehicle={vehicle} />}
      </For>
    </>
  );
};

export { VehiclePage };
