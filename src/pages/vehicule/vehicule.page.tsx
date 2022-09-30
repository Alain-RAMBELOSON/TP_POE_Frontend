import { Component, createResource } from "solid-js";

import { getItemByID } from "../../services/item.read.service";

const id = "63340fb3d817b5ae8fe4bcd8";

const VehiclePage: Component = () => {
  const [todos] = createResource(id, getItemByID);
  return <div>vehicule{JSON.stringify(todos(), null, 2)}</div>;
};

export default VehiclePage;
