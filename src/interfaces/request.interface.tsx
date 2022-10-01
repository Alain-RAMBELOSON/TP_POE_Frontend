import { EEntity } from "../enum/entity.enum";

interface IRequest {
  entity: EEntity;
}

interface IRequest {
  _id?: String;
  body?: any;
}

export type { IRequest };
