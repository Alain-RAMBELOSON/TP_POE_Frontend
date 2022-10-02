import { Component, JSX } from "solid-js";
import { EVehicleLabels } from "../../labels/vehicle.labels";
import { ICard } from "../../props/card.props";
import { displayEntityData } from "../features/display.entity.data";

const Card: Component<ICard> = (props): JSX.Element => {
  return (
    <>
      {displayEntityData(props.type, props.entity, [
        EVehicleLabels._id,
        EVehicleLabels.brand,
        EVehicleLabels.model,
        EVehicleLabels.plateNumber,
        EVehicleLabels.condition,
        EVehicleLabels.dailyRent,
        EVehicleLabels.available,
        EVehicleLabels.type,
        EVehicleLabels.createdAt,
        EVehicleLabels.updatedAt,
      ])}
    </>
  );
};

export { Card };
