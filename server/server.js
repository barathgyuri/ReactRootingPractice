const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5175",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "strawberry", "pineapple"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});