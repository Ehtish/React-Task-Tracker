import React from "react";
import PropTypes from "prop-types";
export default function Button({ color, text }) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <>
      <button onClick={onClick} style={{ background: color }} className="btn">
        {text}
      </button>
    </>
  );
}

Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
