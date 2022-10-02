import { Component, createSignal, For, JSX, onMount } from "solid-js";
import { IVehicleBody } from "../../bodies/vehicle.body";
import { EEntity } from "../../entities/list.entities";
import { getEntities } from "../../services/entities.read.service";
import { Vehicle } from "../../components/vehicle/vehicle.component";
import { TVehicle } from "../../types/vehicle.type";
import { RightPanel } from "../../components/right-panel/right-panel.component";
import "./styles/vehicle-page.style.css";

const VehiclePage: Component = (): JSX.Element => {
  const body: IVehicleBody = {
    entity: EEntity.Vehicle,
  };

  const [getVehicles, setVehicles] = createSignal<TVehicle[]>([]);

  onMount(async () => {
    const response = await getEntities(body);
    setVehicles(response);
  });

  return (
    <>
      <div class="vehicle-page-layout">
        <div class="grid-layout">
          <div class="header-placeholder" />
          <div class="card-layout">
            <For each={getVehicles()}>
              {(vehicle: TVehicle) => <Vehicle vehicle={vehicle} />}
            </For>
          </div>
        </div>
        <div class="right-panel-layout">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export { VehiclePage };
