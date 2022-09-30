import * as config from "../config.json";
import Request from "../types/request.type";
import Entity from "../enum/entity.enum";
import axios from "axios";

export default async function getEntityByID(request: Request) {
  let url: String = "";

  if (request.entity === Entity.Vehicle) {
    url = config.api.vehicle.getVehicleByID;
  }

  return await axios(`${url}${request._id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
