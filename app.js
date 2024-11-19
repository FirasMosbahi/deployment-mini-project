const express = require("express");
const todoRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

module.exports = app;
