import { Match, Switch } from "solid-js";
import Entity from "../../enum/entity.enum";
import VehiculeProps from "../../types/props/vehicule.props";

export default function Card(props: VehiculeProps) {

  console.log("Card Component", props.entity);

  return (
    <>
      <Switch>
        <Match when={props.type == Entity.Vehicle}>
          <div>Card Component Vehicle</div>
          <div>{props.entity._id}</div>
        </Match>
      </Switch>
    </>
  );
}
