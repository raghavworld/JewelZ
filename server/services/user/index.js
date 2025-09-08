import dotenv from "dotenv";
import express from "express";
import { correlationId, errorhandler } from "../../packages/shared/http.js";
import { dbConnect } from "./model/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import { userRegister } from "./controller/userCtrl.js";
dotenv.config();
const PORT = process.env.PORT || 4002;
const app = express();
app.use(express.json());
app.use(correlationId);

app.use("/jewelz/api/v1/user", userRouter);

app.use(errorhandler);
await dbConnect();
app.listen(PORT, () => {
  console.log(`server Running successfully on ${PORT} `);
});
