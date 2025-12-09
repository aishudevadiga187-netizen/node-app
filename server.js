require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");


// Define the PORT for our server
const PORT = process.env.PORT || 5000;

// create our express app
const app = express();


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Enable CORS for all routes
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
// JWT user endpoints
const jwtUserRoutes = require("./routes/jwtUsers");
app.use("/api/jwtUsers", jwtUserRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

