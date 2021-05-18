import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.css";
const BreadCrumb = (props) => {
  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.title}
          </li>
        </ol>
      </nav>
    </div>
  );

  // <nav aria-label="breadcrumb" style={{ marginTop: "40px" }}>
  //   <ol className={classes.breadcrumb}>
  //     <li className="breadcrumb-item">
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className="breadcrumb-item active" aria-current="page">
  //       {props.title}
  //     </li>
  //   </ol>
  // </nav>
};

export default BreadCrumb;
