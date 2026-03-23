"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors")); // line 1
const express_1 = __importDefault(require("express")); // line 2
const profile_routes_1 = __importDefault(require("./routes/profile.routes")); // line 8
const app = (0, express_1.default)(); // line 2 error?
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/profiles", profile_routes_1.default);
exports.default = app;
