"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_module_1 = require("../modules/car.module");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json((0, car_module_1.getAllCars)());
});
router.post("/", (req, res) => {
    const car = req.body;
    (0, car_module_1.addCar)(car);
    res.send("Car added!");
});
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    res.json((0, car_module_1.getCarById)(id));
});
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    (0, car_module_1.deleteCar)(id);
    res.send("Car deleted!");
});
exports.default = router;
