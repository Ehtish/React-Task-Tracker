import React from "react";
import Button from "./Button";

export default function Header({ title }) {
  return (
    <>
      <header>
        {/* <h2 style={headingStyle}>{title}</h2> */}
        <h2>{title}</h2>
        <Button color="green" text="Add" />
      </header>
    </>
  );
}
Header.defaultProps = {
  title: "Task Tracker",
};
// Header.propTypes = {
//   title: propTypes.string,
// };

// css in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
