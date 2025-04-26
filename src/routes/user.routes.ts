import express from "express";
import { addUser, getUserById, removeUser } from "../modules/user.module";
import { User } from "../types";

const router = express.Router();

router.post("/", (req, res) => {
  const user: User = req.body;
  addUser(user);
  res.send("User added!");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json(getUserById(id));
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  removeUser(id);
  res.send("User removed!");
});

export default router;
