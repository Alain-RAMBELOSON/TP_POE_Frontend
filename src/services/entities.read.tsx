import * as config from "../config.json";
import Request from "../types/request.type";
import Entity from "../enum/entity.enum";
import axios from "axios";

const getEntities = async (request: Request) => {
  if (request.entity === Entity.Vehicle) {
    request.url = config.api.getVehicles;
  }
  return axios(`${request.url}$`).then((response) => response.data);
};

export default getEntities;
