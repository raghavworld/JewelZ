import mongoose from "mongoose";
import { userModel } from "../model/userModel.js";
import { BadRequest, Conflict } from "../../../packages/shared/errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signAccess, signRefresh } from "../../../packages/shared/auth.js";

export const userRegister = async (req, res, next) => {
  try {
    const email = req.body?.email;
    const incomingPass = req.body?.password;
    if (!email || !incomingPass) throw BadRequest("Invalid or Empty Fields");
    const exist = await userModel.findOne({ email });
    if (exist) throw Conflict("User Already Exist");
    const passHash = await bcrypt.hash(incomingPass, 10);
    const user = await userModel.create({
      email,
      passwordHash: passHash,
      role: "user",
    });

    if (!user) return Conflict("cannot add data to Db");

    const access = signAccess(
      { sub: user.id, role: user.role },
      process.env.ACCESS_SECRET
    );
    const refresh = signRefresh(
      { sub: user.id, role: user.role },
      process.env.REFRESH_SECRET
    );

    if (!access || !refresh) {
      return Conflict("User Created but Token failed");
    }
    console.log({
      user: user.id,
      role: user.role,
      token: {
        access,
        refresh,
      },
    });

    res.status(201).json({
      user: user.id,
      role: user.role,
      token: {
        access,
        refresh,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return BadRequest("Email or password field is incorrect");
  const userExist = await userModel.findOne({ email });
  if (!userExist) return BadRequest("Inavlid credentials");
  console.log("pass:", userExist);

  const ok = await bcrypt.compare(password, userExist.passwordHash);
  if (!ok) return BadRequest("Incorrect password");

  const access = signAccess(
    { id: userExist.id, role: userExist.role },
    process.env.ACCESS_SECRET
  );

  const refresh = signRefresh(
    { id: userExist.id, role: userExist.role },
    process.env.REFRESH_SECRET
  );
  console.log({
    user: { id: userExist.id, role: userExist.role },
    token: { access, refresh },
  });

  res.status(201).json({
    user: { id: userExist.id, role: userExist.role },
    token: { access, refresh },
  });
};

export const userProfile = async (req, res, next) => {
  try {
    const { role, sub } = req.user;
    if (!role || !sub) return BadRequest();
    const user = await userModel.findById(sub);

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (e) {
    next(e);
  }
};
