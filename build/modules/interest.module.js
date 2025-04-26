"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInterestsByUserId = exports.addInterest = void 0;
const interests = [];
const addInterest = (interest) => interests.push(interest);
exports.addInterest = addInterest;
const getInterestsByUserId = (userId) => interests.filter((i) => i.userId === userId);
exports.getInterestsByUserId = getInterestsByUserId;
