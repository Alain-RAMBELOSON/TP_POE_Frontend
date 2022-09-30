import { Component, createResource } from "solid-js";

const id = "63340fb3d817b5ae8fe4bcd8";

const fetchTodos = async (id: string) => {
  return fetch(`http://localhost:3001/api/vehicle/${id}`).then((r) => r.json());
};

const VehicleComponent: Component = () => {
  const [todos] = createResource(id, fetchTodos);

  return <div>{JSON.stringify(todos(), null, 2)}</div>;
};

export default VehicleComponent;
