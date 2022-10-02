import * as config from "../config.json";
import { IVehicleBody } from "../bodies/vehicle.body";
import { EEntity } from "../entities/list.entities";
import { TVehicle } from "../types/vehicle.type";

const getEntities = async (request: IVehicleBody): Promise<TVehicle[]> => {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicles;
  }

  const response: Response = await fetch(`${url}`);
  const json: TVehicle[] = await response.json();

  return json;
};

export { getEntities };
