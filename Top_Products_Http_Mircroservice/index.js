const express = require("express");
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/categoryRoutes");
app.use(express.json());
app.use("/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
