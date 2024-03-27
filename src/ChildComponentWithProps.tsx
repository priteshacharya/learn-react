import React from "react";
import PropTypes from "prop-types";

const ChildComponentWithProps = ({ person, height }) => {
  return (
    <div>
      <div>Person Name {person.name}</div>
      <div>Image Id {person.imageId}</div>
      <div>Weight: {height}</div>
    </div>
  );
};

ChildComponentWithProps.propTypes = {};

export default ChildComponentWithProps;
