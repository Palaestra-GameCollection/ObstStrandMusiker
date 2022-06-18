import React from "react";
import styles from "./NumberInput.module.css";

export interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  onChange: (value: number) => void;
  onEnter: () => void;
  value: number;
  className?: string;
}

const NumberInput: React.FunctionComponent<NumberInputProps> = (props) => {
  const { className, min = 0, max = 10, step = 1, name } = props;

  return (
    <input
      className={[className, styles.numberinput].join(" ")}
      type="number"
      name={name}
      min={min}
      max={max}
      step={step}
      value={props.value}
      onChange={(event) => {
        props.onChange(Number(event.target.value));
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          props.onEnter();
        }
      }}
    />
  );
};

export default NumberInput;
