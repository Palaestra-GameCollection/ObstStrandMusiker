import React from "react";
import "./InfoBox.css";

export interface InfoBoxProps {
  infoNumber?: string;
  infoText?: string;
  className?: string;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = (props) => {
  const { className, infoNumber, infoText } = props;
  return (
    <div className={[className, "infobox"].join(" ")}>
      <div className={["infobox__number"].join(" ")}>
        {String(infoNumber).padStart(2, "0")}
      </div>
      <div className={["infobox__text"].join(" ")}>{infoText}</div>
    </div>
  );
};

export default InfoBox;
