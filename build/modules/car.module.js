"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.getCarById = exports.getAllCars = exports.addCar = void 0;
const cars = [];
const addCar = (car) => cars.push(car);
exports.addCar = addCar;
const getAllCars = () => cars;
exports.getAllCars = getAllCars;
const getCarById = (id) => cars[id];
exports.getCarById = getCarById;
const deleteCar = (id) => cars.splice(id, 1);
exports.deleteCar = deleteCar;
