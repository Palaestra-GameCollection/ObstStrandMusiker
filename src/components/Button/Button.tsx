import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  value: string;
  onClick: () => void;
  edge?: string;
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { className, onClick, edge, value } = props;

  function renderSvgButtonValue(value: string) {
    return value.split("\n").map((content) => {
      return (
        <tspan
          key={content}
          x="50%"
          // in px to support firefox
          dy="28px"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {content}
        </tspan>
      );
    });
  }

  function renderEdgeButton(value: string, edge: string) {
    return (
      <svg
        width="216"
        height="44"
        viewBox="0 0 216 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={[className, styles["button--svg"]].join(" ")}
        onClick={onClick}
      >
        {edge === "bottom" ? (
          <g filter="url(#filter_bottom)">
            <path
              d="M27.1679 10H187.401L206 44H10L27.1679 10Z"
              fill="#333333"
            />
          </g>
        ) : (
          ""
        )}
        {edge === "top" ? (
          <g filter="url(#filter_top)">
            <path
              d="M27.1679 44H187.401L206 10H10L27.1679 44Z"
              fill="#333333"
            />
          </g>
        ) : (
          ""
        )}

        <defs>
          <filter
            id="filter_top"
            x="0"
            y="-10"
            width="216"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter_bottom"
            x="0"
            y="0"
            width="216"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>

        <text fill="#ffffff">{renderSvgButtonValue(value)}</text>
      </svg>
    );
  }

  function renderNormalButton(value: string) {
    return (
      <button
        onClick={onClick}
        className={[
          className,
          styles.button,
          edge ? styles["button--" + edge] : "",
        ].join(" ")}
      >
        {value.split("\n").map((content) => {
          return <div key={content}>{content}</div>;
        })}
      </button>
    );
  }

  switch (edge) {
    case "bottom":
    case "top":
      return renderEdgeButton(value, edge);

    default:
      return renderNormalButton(value);
  }
};

export default Button;
