"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_module_1 = require("../modules/user.module");
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const user = req.body;
    (0, user_module_1.addUser)(user);
    res.send("User added!");
});
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    res.json((0, user_module_1.getUserById)(id));
});
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    (0, user_module_1.removeUser)(id);
    res.send("User removed!");
});
exports.default = router;
