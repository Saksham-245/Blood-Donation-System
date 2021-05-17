import React from "react";
import BreadCrumb from "../components/breadcrumbs/Breadcrumbs";
import NavBar from "../components/Navbar/Navbar";

const Donar = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "25px", marginLeft: "25px" }}>
        <h3 className="display-3" style={{ fontSize: "30px" }}>
          Become a Donar
        </h3>
        <BreadCrumb title="Become a Donar" />
      </div>
    </div>
  );
};

export default Donar;
