"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./middlewares/logger");
const car_routes_1 = __importDefault(require("./routes/car.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const interest_routes_1 = __importDefault(require("./routes/interest.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use("/cars", car_routes_1.default);
app.use("/users", user_routes_1.default);
app.use("/interests", interest_routes_1.default);
app.listen(3000, () => {
    console.log(" Server running on http://localhost:3000");
});
