import { For, JSX } from "solid-js";
import { EEntity } from "../../../entities/list.entities";
import { EVehicleLabels } from "../../../labels/vehicle.labels";
import { ObjectUtils } from "../../../utils/object.utils";

const getCardContent = (type: EEntity, entity: Object): JSX.Element => {
  if (type === EEntity.Vehicle) {
    const labels = EVehicleLabels;
    return (
      <>
        <h3>Card Component</h3>
        <For each={ObjectUtils.valuesToArray(labels)}>
          {(label, i) => (
            <div>
              {label as JSX.Element} :{" "}
              {
                ObjectUtils.valuesToArray(entity).filter((element) => {
                  return element === ObjectUtils.valuesToArray(entity)[i()];
                }) as JSX.Element
              }
            </div>
          )}
        </For>
      </>
    );
  }
};

export { getCardContent };
