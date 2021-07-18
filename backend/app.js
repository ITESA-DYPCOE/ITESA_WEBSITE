require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

//my routes
const querysRoutes = require("./routes/query");
const eventsRoutes = require("./routes/event");
// const categoryRoutes = require("./routes/category");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use(cors());

//routes
app.use("/api", querysRoutes);
app.use("/api", eventsRoutes);
// app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//PORT
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
  console.log(`App is running.. at ${port}`);
});
