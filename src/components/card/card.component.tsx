import { Component, JSX } from "solid-js";
import { ICard } from "../../props/card.props";

const Card: Component<ICard> = (props): JSX.Element => {
  return (
    <>
      <h3>Card Component</h3>
      <>{props.entity.plateNumber}</>
    </>
  );
};

export { Card };
