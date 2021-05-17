import React from "react";
import BreadCrumb from "../components/breadcrumbs/Breadcrumbs";
import NavBar from "../components/Navbar/Navbar";
const Search = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "25px", marginLeft: "25px" }}>
        <h3 className="display-3" style={{ fontSize: "30px" }}>
          Search for Blood
        </h3>
        <BreadCrumb title="Search Donar" />
      </div>
    </div>
  );
};

export default Search;
