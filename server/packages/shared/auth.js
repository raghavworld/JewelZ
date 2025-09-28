//? Authentication MiddleWare
import jwt from "jsonwebtoken";
import { BadRequest, Conflict, Forbidden, Unauthorized } from "./errors.js"; //if you're export multiple file then u have to use the same syntax as that
import express from "express";

export const signAccess = (payload, secret, ttlSec = 900) => {
  const accessToken = jwt.sign(payload, secret, { expiresIn: ttlSec });
  return accessToken;
};
export const signRefresh = (payload, secret, ttlSec = 7 * 24 * 60 * 60) => {
  const refreshToken = jwt.sign(payload, secret, { expiresIn: ttlSec });
  return refreshToken;
};
//!complete authmiddleware
export const authMid = (secret, roles) => async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer"))
    return next(Unauthorized());
  const token = authorization.slice(7).trim();
  try {
    const decoded = jwt.verify(token, secret);

    if (roles && !roles.includes(decoded.role))
      return next(Forbidden("Forbidden User Access"));

    req.user = decoded;
    console.log(req.user);

    next();
  } catch (e) {
    if (e.message === "jwt expired")
      next(Conflict(e.message, "call for refresh token"));
    next(e);
  }
};
