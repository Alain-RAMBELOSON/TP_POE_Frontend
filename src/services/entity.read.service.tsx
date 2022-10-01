import * as config from "../config.json";
import { IRequest } from "../interfaces/request.interface";
import { EEntity } from "../enum/entity.enum";
import { IVehicle } from "../interfaces/vehicle.interface";

const getEntityByID = async (request: IRequest): Promise<IVehicle> => {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicleByID;
  }

  const response = await fetch(`${url}${request._id}`);
  const json = await response.json();
  const data = json as IVehicle;

  return data;
};

export { getEntityByID };
