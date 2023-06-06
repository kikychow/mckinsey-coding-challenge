const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

const dataPath = "../data/reports_data.json";

const getReportsData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const saveReportsData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

app.get("/reports", (req, res) => {
  res.send(getReportsData().elements);
});

app.put("/reports/:reportId", (req, res) => {
  const reportId = req.params.reportId;
  const { ticketState } = req.body;

  let reports = getReportsData();
  let report = reports.elements.find((report) => report.id === reportId);

  if (report) {
    report.state = ticketState;
    saveReportsData(reports);
    res.status(200).send({ message: "Report status updated successfully" });
  } else {
    res.status(404).send({ error: "Report not found" });
  }
});

const port = 3001;
app.listen(port, () => console.log(`Listening to ${port}`));
