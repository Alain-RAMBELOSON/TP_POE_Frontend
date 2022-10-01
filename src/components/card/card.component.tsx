import { Component } from "solid-js";
import { ICard } from "../../props/card.props";

const Card: Component<ICard> = (props) => {
  return (
    <>
      <div>Card Component</div>
      <>{props.entity.plateNumber}</>
    </>
  );
};

export { Card };
