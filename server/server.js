const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());

const MOCK_SUGGESTIONS = [
  { id: 1, name: "Erik", profile_pic: profilePic, job_title: "Recruiter" },
  {
    id: 2,
    name: "Berkie",
    profile_pic: profilePic,
    job_title: "Staff Scientist",
  },
  {
    id: 3,
    name: "Starla",
    profile_pic: profilePic,
    job_title: "Budget/Accounting Analyst III",
  },
  {
    id: 4,
    name: "Eyde",
    profile_pic: profilePic,
    job_title: "Computer Systems Analyst IV",
  },
  {
    id: 5,
    name: "Ricky",
    profile_pic: profilePic,
    job_title: "Systems Administrator IV",
  },
  {
    id: 6,
    name: "Conny",
    profile_pic: profilePic,
    job_title: "Statistician I",
  },
];

app.get("/search", (req, res) => {
  const { query } = req.query;
  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.job_title.toLowerCase().includes(query.toLowerCase)
  );

  res.json(filteredSuggestions);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });