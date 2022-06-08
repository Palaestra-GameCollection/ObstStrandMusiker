import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  values: Array<string>;
  className?: string;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { className, values } = props;

  return (
    <div className={[className, styles.card].join(" ")}>
      <ol className={[styles.card__valuelist].join(" ")}>
        {values.map((value) => {
          return (
            <li className={[styles.card__value].join(" ")} key={value}>
              <span>{value}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Card;
