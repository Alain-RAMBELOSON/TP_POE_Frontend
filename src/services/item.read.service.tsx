import * as config from "../config.json";
import axios from "axios";

export const getItemByID = async (id: string) => {
  return axios(`${config.api.getVehicleByID}${id}`).then((r) => r.data);
};
