import Entity from "../../enum/entity.enum";

type VehiculeProps = {
  type: Entity;
  entity: {
    _id: string;
    brand: string;
    model: string;
    plateNumber: string;
    condition: string;
    dailyRent: Number;
    available: Boolean;
    type: string;
    createdAt: string;
    updatedAt: string;
    __v: Number;
  };
};

export default VehiculeProps;
