import React from "react";

function ReportItem(props) {
  const blockedState = "BLOCKED";
  const resolvedState = "CLOSED";

  const updateReportState = async (reportId, newState) => {
    console.log(reportId);
    var response = await fetch(`http://127.0.0.1:3001/reports/${reportId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticketState: newState,
      }),
    });

    if (response.ok) {
      props.setReportItems((prevReportItems) => {
        return prevReportItems.map((item) =>
          item.id === reportId ? { ...item, state: newState } : item
        );
      });
    }
  };
  return (
    <div className="row report-card">
      <div className="col-5">
        <p>Id: {props.id}</p>
        <p>State: {props.state}</p>
        <p>
          <a href="/">Details</a>
        </p>
      </div>
      <div className="col-5">
        <p>Type: {props.type}</p>
        <p>Message: {props.message}</p>
      </div>
      <div className="col-2 button-container">
        <button onClick={() => updateReportState(props.id, blockedState)}>
          Block
        </button>
        <button onClick={() => updateReportState(props.id, resolvedState)}>
          Resolve
        </button>
      </div>
    </div>
  );
}

export default ReportItem;
