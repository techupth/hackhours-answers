/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ErrorIcon from "../assets/icons/frown.jsx";
import WarningIcon from "../assets/icons/alert-triangle.jsx";
import InfoIcon from "../assets/icons/alert-circle.jsx";
import SuccessIcon from "../assets/icons/check-circle.jsx";

function Alert(props) {
  let bgColor = "#F9EBC8";
  let AlertIcon = InfoIcon;

  if (props.severity === "error") {
    bgColor = "#F9C8C8";
    AlertIcon = ErrorIcon;
  } else if (props.severity === "warning") {
    bgColor = "#F9D9C8";
    AlertIcon = WarningIcon;
  } else if (props.severity === "success") {
    bgColor = "#CEF7CD";
    AlertIcon = SuccessIcon;
  }

  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: ${bgColor};
      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <AlertIcon />
      </div>
      {props.children}
    </div>
  );
}

export default Alert;
