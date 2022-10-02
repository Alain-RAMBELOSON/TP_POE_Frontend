import * as config from "../config.json";
import { IVehicleBody } from "../bodies/vehicle.body";
import { EEntity } from "../entities/list.entities";
import { TVehicle } from "../types/vehicle.type";

const getEntityByID = async (request: IVehicleBody): Promise<TVehicle> => {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicleByID;
  }

  const response = await fetch(`${url}${request._id}`);
  const json = await response.json();
  const data = json as TVehicle;

  return data;
};

export { getEntityByID };
