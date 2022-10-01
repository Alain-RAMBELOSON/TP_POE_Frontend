import * as config from "../config.json";
import { IRequest } from "../interfaces/request.interface";
import { EEntity } from "../enum/entity.enum";
import axios from "axios";

const getEntities = async (request: IRequest) => {
  let url: String = "";

  if (request.entity === EEntity.Vehicle) {
    url = config.api.vehicle.getVehicles;
  }

  return await axios(`${url}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export { getEntities };
