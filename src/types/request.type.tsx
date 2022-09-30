import Entity from "../enum/entity.enum";

type Request = {
  entity: Entity;
  url: string;
  id: string;
  body: {};
};

export default Request;
