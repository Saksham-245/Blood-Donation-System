import React from "react";
import { Link } from "react-router-dom";
import classes from "./breadcrumb.module.css";

const BreadCrumb = (props) => {
  return (
    <nav aria-label="breadcrumb" style={{ marginTop: "40px" }}>
      <ol className={classes.breadcrumb}>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {props.title}
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
