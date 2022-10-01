import { Match, Switch } from "solid-js";
import Entity from "../../enum/entity.enum";
import CardProps from "../../props/card.props";

export default function Card(props: CardProps | any) {
  const vehiculeProp = typeof props.entity;

  const fallback = (_id: string) => {
    return <div>Can't load vehicule {_id}</div>;
  };

  return (
    <>
      <Switch fallback={fallback(props.entity._id)}>
        <Match
          when={vehiculeProp === "object" && props.type === Entity.Vehicle}
        >
          <div>Card Component Vehicle</div>
          <div>{props.entity._id}</div>
        </Match>
      </Switch>
    </>
  );
}
