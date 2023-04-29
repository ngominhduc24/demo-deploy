const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.use("", async (req, res) => {
  try {
    return res.send("Hello Duc123!");
    // res.json({
    //   status: 200,
    //   message: "Get data has successfully",
    // });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = app;
