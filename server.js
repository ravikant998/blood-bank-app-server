const express = require("express");
const dotenv = require("dotenv");
const morgon = require("morgan");
const colrs = require("cors");
const connectDB = require("./config/db");

// dot config
dotenv.config();
// mongodb connection
connectDB();
//rest object
const app = express();
//middleware
app.use(express.json());
app.use(colrs());
app.use(morgon("dev"));
//routes
app.use("/api/v1/test", require("./routes/testroutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// port
const PORT = process.env.PORT || 8000;
//lisen
app.listen(PORT, () => {
  console.log(
    `Node server is running In ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
  );
});
