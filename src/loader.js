import React from "react";
import { ColorRing } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

export default function Loader() {
  return (
    <div className="container text-center mt-5">
      <ColorRing
        className="img-fluid"
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}
