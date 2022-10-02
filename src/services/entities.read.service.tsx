import * as config from "../config.json";
import { IVehicleBody } from "../bodies/vehicle.body";
import { EEntity } from "../entities/list.entities";
import { TVehicle } from "../types/vehicle.type";

const getEntities = async (request: IVehicleBody): Promise<TVehicle[]> => {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicles;
  }

  const response = await fetch(`${url}`);
  const json = await response.json();
  const data = json as TVehicle[];

  return data;
};

export { getEntities };
