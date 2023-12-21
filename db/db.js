import mongoose from "mongoose";

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("database connect successfully"))
  .catch((error) => console.log(error));

export default mongoose;
