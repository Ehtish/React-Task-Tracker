import React from "react";

export default function Header({ title }) {
  return (
    <>
      <header>
        {/* <h2 style={headingStyle}>{title}</h2> */}
        <h2>{title}</h2>
        <button className="btn">Add</button>
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
