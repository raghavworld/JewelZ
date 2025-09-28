class AppError extends Error {
  constructor(statusCode, message, details) {
    super(message); //send message to
    this.statusCode = statusCode || '500';
    this.isOperational = true;
  }
}

const BadRequest = (m = "BAD REQUEST", d) => new AppError(400, m, d);
const Unauthorized = (m = "UNAUTHORIZED") => new AppError(401, m);
const Forbidden = (m = "FORBIDDEN") => new AppError(403, m);
const NotFound = (m = "NOT_FOUND") => new AppError(404, m);
const ValidationError = (m = "VALIDATION_ERROR",d) => new AppError(422, m, d);
const Conflict = (m = "CONFLICT",d) => new AppError(409, m, d);

export {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  ValidationError,
  Conflict,
};
