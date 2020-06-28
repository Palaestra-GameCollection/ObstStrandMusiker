import React from "react";
import "./Card.css";

export interface CardProps {
  values: Array<string>;
  className?: string;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { className, values } = props;

  return (
    <div className={[className, "card"].join(" ")}>
      <ol className={["card__valuelist"].join(" ")}>
        {values.map((value) => {
          return (
            <li className={["card__value"].join(" ")} key={value}>
              {value}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Card;
