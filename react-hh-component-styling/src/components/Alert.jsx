// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import errorIcon from "../assets/logo/alert-frown.svg";
import warningIcon from "../assets/logo/alert-triangle.svg";
import infoIcon from "../assets/logo/alert-circle.svg";
import successIcon from "../assets/logo/alert-check-circle.svg";

function Alert(props) {
  let bgColor = "#F9EBC8";
  let icon = infoIcon;
  if (props.severity === "error") {
    bgColor = "#F9C8C8";
    icon = errorIcon;
  } else if (props.severity === "warning") {
    bgColor = "#F9D9C8";
    icon = warningIcon;
  } else if (props.severity === "success") {
    bgColor = "#CEF7CD";
    icon = successIcon;
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

        &::before {
          content: url(${icon});
          position: block;
          left: -35px;
          font-size: 35px;
          padding-right: 10px;
          text-align: center;
          display: inline;
        }
      `}
    >
      {props.children}
    </div>
  );
}

export default Alert;
