const express = require("express");
const cors = require("cors");
const { loadSuggestions } = require("./utils");

const app = express();
app.use(cors());


app.get("/search", (req, res) => {
  const { query } = req.query;
  const filteredSuggestions = loadSuggestions().filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.job_title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredSuggestions);
});



module.exports = {
    app
}

