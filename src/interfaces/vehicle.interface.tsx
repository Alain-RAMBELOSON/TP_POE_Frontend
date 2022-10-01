interface IVehicle {
  _id: string;
  plateNumber: string;
}

interface IVehicle {
  brand?: string;
  model?: string;
  condition?: string;
  dailyRent?: Number;
  available?: Boolean;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: Number;
}

export type { IVehicle };
