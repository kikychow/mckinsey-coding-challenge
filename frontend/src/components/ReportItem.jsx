import React from "react";

function ReportItem(props) {
  return (
    <div className="row report-card">
      <div className="col-5">
        <p>Id: {props.id}</p>
        <p>State: {props.state}</p>
      </div>
      <div className="col-5">
        <p>Type: {props.type}</p>
        <p>Message: {props.message}</p>
      </div>
      <div className="col-2 button-container">
        <button >Block</button>
        <button >Resolve</button>
      </div>
    </div>
  );
}

export default ReportItem;
