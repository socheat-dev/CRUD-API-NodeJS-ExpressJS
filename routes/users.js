import express from "express";
import {
  createUsers,
  getUsers,
  getUser,
  deletedUser,
  updatedUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUsers);

router.get("/:id", getUser);

router.delete("/:id", deletedUser);

router.patch("/:id", updatedUser);

export default router;
