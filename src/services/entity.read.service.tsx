import * as config from "../config.json";
import Request from "../types/request.type";
import Entity from "../enum/entity.enum";
import axios from "axios";

const getEntityByID = async (request: Request) => {
  if (request.entity === Entity.Vehicle) {
    request.url = config.api.getVehicleByID;
  }
  return axios(`${request.url}${request.id}`).then((response) => response.data);
};

export default getEntityByID;