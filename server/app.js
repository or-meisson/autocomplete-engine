const express = require("express");
const cors = require("cors");
const path = require("path");
const { loadSuggestions } = require("./utils");

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));



app.get("/search", (req, res) => {
  const { query } = req.query;
  const filteredSuggestions = loadSuggestions().filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.job_title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredSuggestions);
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


module.exports = {
  app,
};
