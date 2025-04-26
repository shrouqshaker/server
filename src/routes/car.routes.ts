import express from "express";
import {
  addCar,
  deleteCar,
  getAllCars,
  getCarById,
} from "../modules/car.module";
import { Car } from "../types";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getAllCars());
});

router.post("/", (req, res) => {
  const car: Car = req.body;
  addCar(car);
  res.send("Car added");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json(getCarById(id));
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  deleteCar(id);
  res.send("Car deleted!");
});

export default router;
