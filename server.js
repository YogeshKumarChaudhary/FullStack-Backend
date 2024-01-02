const express = require("express");
require("dotenv/config");
const db = require("./db/db.js");
const cors = require("cors");
const router = require("./routes/authRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");
const serviceRoutes = require("./routes/serviceRoutes.js");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware.js");
const adminRoutes = require("./routes/adminRoutes.js");
const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: "https://mernapp-yogesh.netlify.app",
  // origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", router);
app.use("/api/form", contactRoutes);
app.use("/api/data", serviceRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Your server is listening on ${port}`);
});
