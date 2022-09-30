import Entity from "../enum/entity.enum";

type Request = {
  entity: Entity;
  _id?: String;
  body?: any;
};

export default Request;
