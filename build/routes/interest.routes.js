"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const interest_module_1 = require("../modules/interest.module");
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const interest = req.body;
    (0, interest_module_1.addInterest)(interest);
    res.send("Interest added!");
});
router.get("/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    res.json((0, interest_module_1.getInterestsByUserId)(userId));
});
exports.default = router;
