import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const TitleBar = props => {
  return (
    <div className="list-books-title">
      <h1>
        {props.title}
      </h1>
    </div>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBar;
