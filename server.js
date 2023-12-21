import express from "express";
import "dotenv/config";
import db from "./db/db.js";
import cors from "cors";
import { router } from "./routes/authRoutes.js";
import { contactRoutes } from "./routes/contactRoutes.js";
import { serviceRoutes } from "./routes/serviceRoutes.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", router);
app.use("/api/form", contactRoutes);
app.use("/api/data", serviceRoutes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});
