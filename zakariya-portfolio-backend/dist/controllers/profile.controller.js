"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.getProfile = exports.getProfiles = exports.createProfile = void 0;
const profile_model_1 = require("../models/profile.model");
// CREATE PROFILE
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profile_model_1.Profile.create(req.body);
        return res.status(201).json(profile);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.createProfile = createProfile;
// GET ALL PROFILES
const getProfiles = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profile_model_1.Profile.findAll();
        return res.json(profiles);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.getProfiles = getProfiles;
// GET PROFILE BY ID
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const profile = yield profile_model_1.Profile.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Not found" });
        }
        return res.json(profile);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.getProfile = getProfile;
// UPDATE PROFILE
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const profile = yield profile_model_1.Profile.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Not found" });
        }
        yield profile.update(req.body);
        return res.json(profile);
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.updateProfile = updateProfile;
// DELETE PROFILE
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const profile = yield profile_model_1.Profile.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Not found" });
        }
        yield profile.destroy();
        return res.json({ message: "Deleted successfully" });
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
});
exports.deleteProfile = deleteProfile;
