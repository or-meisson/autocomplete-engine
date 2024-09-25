const fs = require("fs");

let suggestions = [];
const profilePic =
  "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";

const loadSuggestions = () => {
  if (suggestions.length) {
    return suggestions;
  }
  try {
    const data = fs.readFileSync("./suggestions.json", "utf8");
    suggestions = JSON.parse(data).map((suggestion) => ({
      ...suggestion,
      profile_pic: profilePic,
    }));
    return suggestions;
  } catch (err) {
    console.error("Error reading the suggestions file:", err);
    return suggestions;
  }
};

module.exports = {
  loadSuggestions,
};
