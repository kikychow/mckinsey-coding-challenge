import React, { useState, useEffect } from "react";
import ReportItem from "./ReportItem";

function ReportList(props) {
  const [reportItems, setReportItems] = useState([]);
  const getItems = async () => {
    var response = await fetch(`http://127.0.0.1:3001/reports`);

    if (response.ok) {
      var res = await response.json();
      setReportItems(res);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {reportItems.map((item) => {
        return item.state === "OPEN" ? (
          <ReportItem
            key={item.id}
            id={item.id}
            state={item.state}
            type={item.payload?.reportType}
            message={item.payload?.message}
            setReportItems={setReportItems}
          />
        ) : null;
      })}
    </div>
  );
}

export default ReportList;
