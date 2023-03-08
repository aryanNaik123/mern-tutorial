const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const { ErrorHandler, errorHandler } = require("./middleware/errorMiddleware");
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`Server on ${port}`));
