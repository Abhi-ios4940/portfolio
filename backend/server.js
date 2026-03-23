console.log("Starting server...");
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// Save data in file
app.get("/", (req, res) => {
  res.send("Server is working ✅");
});
app.post("/contact", (req, res) => {
  const data = req.body;

  fs.appendFile("messages.json", JSON.stringify(data) + "\n", (err) => {
    if (err) return res.status(500).send("Error");

    res.send("Saved");
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));