import Entity from "../enum/entity.enum";

type Request = {
  entity: Entity;
  id?: String;
  body?: any;
};

export default Request;
