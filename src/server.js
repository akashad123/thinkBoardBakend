import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// const express = require("express"); We can also import like this
// To use without warning, use "type"="module" in package.json

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "https://thinkboardfrontend.onrender.com",
  }),
);
app.use(express.json()); // This middleware will parse JSON bodies
app.use(rateLimiter);

// Our simple sample custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started running at ", PORT);
    // process.exit(1); with this my app crashes, without this its fine //Exit with failure
  });
});
