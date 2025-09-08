import { Forbidden } from "../../packages/shared/errors.js";
import express from "express";
import { correlationId, errorhandler } from "../../packages/shared/http.js";

const app = express();
app.use(express.json());
app.use(correlationId);

const PORT = process.env.PORT || 4002;

app.post("/login", async (req, res, next) => {
  const user = {
    name: "raman",
    password: "raman",
  };

  try {
    if (req.body.name === user.name && req.body.password === user.password) {
      console.log({
        message: "success",
      });

      res.status(200).json({
        message: "success",
      });
    } else {
      next(Forbidden);
    }
  } catch (e) {
    next(e);
  }
});

app.use(errorhandler);
app.listen(PORT, () => {
  console.log(`serever Running successfully on ${PORT} `);
});
