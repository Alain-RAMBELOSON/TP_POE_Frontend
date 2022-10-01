import { Match, Switch } from "solid-js";
import Entity from "../../enum/entity.enum";

export default function Card(props: any) {
  return (
    <>
      <Switch>
        <Match when={props.type == Entity.Vehicle}>
          <div>Card Component Vehicle {props.entity}</div>
        </Match>
      </Switch>
    </>
  );
}
