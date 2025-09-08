//?middleware that creates:
//1. define logger
//2. Attach unique click ID
//3. Error Handler
import winston from "winston";

//create a instance of logging  lib winston
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

//create unique clickId
const correlationId = (req, res, next) => {
  req.cid =
    req.header("x-correlation-id") ||
    Math.random().toString().slice(2) + Date.now().toString();
    console.log(req.cid);
  next();
};

const errorhandler = (err, req, res, next) => {
  const status = err.statusCode || "500";
  const message = err.message || "Server_Error";
  logger.error({ cid: cid, message, status, details: err.details });
  res.status(status).json({ error: { message, status, details: err.details } });
};

export { logger, correlationId, errorhandler };
