import * as config from "../config.json";
import Request from "../types/request.type";
import Entity from "../enum/entity.enum";
import axios from "axios";

export const getItemByID = async (request: Request) => {
  if (request.entity === Entity.Vehicle) {
    request.url = config.api.getVehicleByID;
  }
  return axios(`${request.url}${request.id}`).then((r) => r.data);
};
