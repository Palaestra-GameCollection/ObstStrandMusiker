import React from "react";
import "./NumberInput.css";

export interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  onChange: (value: number) => void;
  value: number;
  className?: string;
}

const NumberInput: React.FunctionComponent<NumberInputProps> = (props) => {
  const { className, min = 0, max = 10, step = 1, name } = props;

  return (
    <input
      className={[className, "numberinput"].join(" ")}
      type='number'
      name={name}
      min={min}
      max={max}
      step={step}
      value={props.value}
      onChange={(event) => {
        props.onChange(Number(event.target.value));
      }}
    />
  );
};

export default NumberInput;
