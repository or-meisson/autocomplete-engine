const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;
app.use(cors());

const profilePic = "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"

let suggestions = [];


try {
  const data = fs.readFileSync("./suggestions.json", "utf8");
  suggestions = JSON.parse(data);  // Parse JSON data
  // console.log('suggestions');
} catch (err) {
  console.error("Error reading the suggestions file:", err);
}
app.get("/search", (req, res) => {
  const { query } = req.query;
  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.job_title.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredSuggestions);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });