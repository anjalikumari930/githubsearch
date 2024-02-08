import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./Routes/authRoute.js";
import cors from "cors";

//database config
connectDB();

//rest object
const app = express();
app.use(cors());

//middlewares

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
//Port
const PORT = process.env.PORT || 5000;
//run listen
app.listen(PORT, () => {
  console.log(
    `serving Running on ${process.env.DEV_MODE}mode on port ${PORT}`.bgCyan
      .white
  );
});
