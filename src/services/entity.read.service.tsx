import * as config from "../config.json";
import { IRequest } from "../interfaces/request.interface";
import { EEntity } from "../enum/entity.enum";
import { IVehicle } from "../interfaces/vehicle.interface";

export default async function getEntityByID(request: IRequest) {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicleByID;
  }

  const response = await fetch(`${url}${request._id}`);
  const results = await response.json();
  const documents = results as IVehicle;

  return documents;
}
