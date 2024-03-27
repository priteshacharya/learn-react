import React from "react";
import PropTypes from "prop-types";
import ChildComponentWithProps from "./ChildComponentWithProps";

const ComponentWithProps = () => {
  return (
    <ChildComponentWithProps
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      height={100}
    ></ChildComponentWithProps>
  );
};

export default ComponentWithProps;
