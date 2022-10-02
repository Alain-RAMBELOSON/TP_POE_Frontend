import { Component, JSX } from "solid-js";
import { ICard } from "../../props/card.props";
import { getCardContent } from "./features/get.card.content";

const Card: Component<ICard> = (props): JSX.Element => {
  return <>{getCardContent(props.type, props.entity)}</>;
};

export { Card };
