import { Request, Response } from "express";
import { Profile } from "../models/profile.model";

// CREATE PROFILE
export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);
    return res.status(201).json(profile);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// GET ALL PROFILES
export const getProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    return res.json(profiles);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// GET PROFILE BY ID
export const getProfile = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json(profile);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// UPDATE PROFILE
export const updateProfile = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: "Not found" });
    }

    await profile.update(req.body);

    return res.json(profile);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// DELETE PROFILE
export const deleteProfile = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: "Not found" });
    }

    await profile.destroy();

    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
