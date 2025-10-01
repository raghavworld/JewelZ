import dotenv from "dotenv";
import express from "express";
import { correlationId, errorhandler } from "../../packages/shared/http.js";
import { dbConnect } from "./model/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import { userRegister } from "./controller/userCtrl.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 4002;
const app = express();
app.use(cors());
app.use(express.json());
app.use(correlationId);
// console.log(process.env.PORT);

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, service: "user" });
});
app.use("/jewelz/api/v1/user", userRouter);
app.use(errorhandler);
await dbConnect();
app.listen(PORT, () => {
  console.log(`server Running successfully on ${PORT} `);
});
