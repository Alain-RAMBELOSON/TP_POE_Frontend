import { EEntity } from "../entities/list.entities";
import { TVehicle } from "../types/vehicle.type";

interface ICard {
  type: EEntity;
  entity: TVehicle;
}

export type { ICard };
