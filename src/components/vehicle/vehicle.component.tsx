import VehicleProps from "../../props/vehicle.props";
import Card from "../card/card.component";
import Entity from "../../enum/entity.enum";

export default function Vehicle(props: VehicleProps) {
  return <Card type={Entity.Vehicle} entity={props.vehicle} />;
}
