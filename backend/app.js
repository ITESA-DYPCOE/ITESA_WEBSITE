require("dotenv").config();

const admin = require("firebase-admin");
const secretKey = require("./utils/serviceAccountKey").config;
const serviceAccount = JSON.parse(JSON.stringify(secretKey));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL,
});

const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

//my routes
// const querysRoutes = require("./routes/query");
const eventsRoutes = require("./routes/event");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.send({ msg: "Hey, i am working" });
});

// app.use("/api", querysRoutes);
app.use("/api", eventsRoutes);
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting server
app.listen(port, () => {
  console.log(`ITESA BACKEND UP🚀 at ${port}`);
});

//testing server :)
