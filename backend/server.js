const express = require("express");
const cors = require('cors');
const fs = require("fs");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json())

const dataPath = "../data/reports.json";

const getReportsData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

app.get("/reports", (req, res) => {
    res.send(getReportsData().elements);
})

const port = 3001;
app.listen(port, () => console.log(`Listening to ${port}`));
