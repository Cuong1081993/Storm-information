const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const authRoutes = require("./routes/auth");
const stormRoutes = require("./routes/storm");

mongoose.connect(
  `mongodb+srv://ntqcuong:cuong123@atlascluster.2muz8tt.mongodb.net/stormDB`
);
app.use(authRoutes);
app.use(stormRoutes);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
