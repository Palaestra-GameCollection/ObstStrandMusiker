import React from "react";
import styles from "./InfoBox.module.css";

export interface InfoBoxProps {
  infoNumber?: string;
  infoText?: string;
  className?: string;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = (props) => {
  const { className, infoNumber, infoText } = props;
  return (
    <div className={[className, styles.infobox].join(" ")}>
      <div className={[styles.infobox__number].join(" ")}>
        {String(infoNumber).padStart(2, "0")}
      </div>
      <div className={[styles.infobox__text].join(" ")}>{infoText}</div>
    </div>
  );
};

export default InfoBox;
