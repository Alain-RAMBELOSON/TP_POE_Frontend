import { Component, JSX } from "solid-js";
import { EVehicleLabels } from "../../labels/vehicle.labels";
import { ICard } from "../../props/card.props";
import { displayEntityData } from "../../features/display.entity.data";
import "./styles/card.style.css";

const Card: Component<ICard> = (props): JSX.Element => {
  return (
    <>
      <div class="card">
        {displayEntityData(props.type, props.entity, [
          EVehicleLabels._id,
          EVehicleLabels.brand,
          EVehicleLabels.model,
          EVehicleLabels.plateNumber,
          EVehicleLabels.condition,
          EVehicleLabels.dailyRent,
          EVehicleLabels.available,
          EVehicleLabels.type,
          // EVehicleLabels.createdAt,
          // EVehicleLabels.updatedAt,
        ])}
      </div>
    </>
  );
};

export { Card };
