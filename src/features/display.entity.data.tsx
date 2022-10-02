import { For, JSX } from "solid-js";
import { EEntity } from "../entities/list.entities";
import { EVehicleLabels } from "../labels/vehicle.labels";
import { ObjectUtils } from "../utils/object.utils";

/**
 * Adds a node to the DOM tree to display the data of an entity.
 *
 * @param type Entity type
 * @param entity Entity object
 * @param display Array of labels and values
 * @returns DOM structure update
 */
const displayEntityData = (
  type: EEntity,
  entity: Object,
  filter: String[]
): JSX.Element => {
  let entityLabels: any = undefined;

  if (type === EEntity.Vehicle) {
    entityLabels = EVehicleLabels;
  }

  const filteredLabels = () => {
    let filteredLabels: String[] = [];
    Object.values(entityLabels).map((label: any) => {
      if (filter.includes(label)) {
        filteredLabels.push(label);
      }
    });
    return filteredLabels;
  };

  return (
    <>
      <div class="card-data">
        <For each={filteredLabels()}>
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
      </div>
    </>
  );
};

export { displayEntityData };
