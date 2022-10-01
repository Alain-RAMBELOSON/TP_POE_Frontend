import { EEntity } from "../enum/entity.enum";
import { IVehicle } from "../interfaces/vehicle.interface";

interface ICard {
  type: EEntity;
  entity: IVehicle;
}

export type { ICard };
