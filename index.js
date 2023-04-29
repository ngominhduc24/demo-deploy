const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.use("", async (req, res) => {
  try {
    return res.send("Hello Duc!");
    // res.json({
    //   status: 200,
    //   message: "Get data has successfully",
    // });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));