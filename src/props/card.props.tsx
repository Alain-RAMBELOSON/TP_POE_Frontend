import Entity from "../enum/entity.enum";
import Vehicule from "../types/vehicle.type";

type CardProps = {
  type: Entity;
  entity: Vehicule | unknown;
};

export default CardProps;
