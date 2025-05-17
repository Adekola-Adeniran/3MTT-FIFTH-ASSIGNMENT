import React from "react";

const DataHandler = ({ loading, error, data, children }) => {
  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default DataHandler;
