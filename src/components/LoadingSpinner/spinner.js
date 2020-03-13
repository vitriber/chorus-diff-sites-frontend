import React from "react";
import Loader from "react-loader-spinner";
import "./spinner.css";

export const LoadingSpinner = () => {

  return (
      <div className="spinner">
        <Loader type="ThreeDots" color="#808080" height={100} width={100} />
      </div>
  );
};