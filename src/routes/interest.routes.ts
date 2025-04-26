import express from "express";
import { addInterest, getInterestsByUserId } from "../modules/interest.module";
import { Interest } from "../types";

const router = express.Router();

router.post("/", (req, res) => {
  const interest: Interest = req.body;
  addInterest(interest);
  res.send("Interest added!");
});

router.get("/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  res.json(getInterestsByUserId(userId));
});

export default router;
