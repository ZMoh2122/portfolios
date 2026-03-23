import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Profile = sequelize.define("Profile", {
  name: { type: DataTypes.STRING, allowNull: false },
  bio: DataTypes.TEXT,
  location: DataTypes.STRING,
  nationality: DataTypes.STRING,
  availability: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  github: DataTypes.STRING,
  twitter: DataTypes.STRING,
  linkedin: DataTypes.STRING,
  expectedSalary: DataTypes.INTEGER,
  ownACar: DataTypes.BOOLEAN,
  haveDrivingLicense: DataTypes.BOOLEAN,
  noticePeriod: DataTypes.STRING,
  immigrationStatus: DataTypes.STRING,
  referees: DataTypes.STRING,
  willingToRelocate: DataTypes.BOOLEAN,
  languages: { type: DataTypes.JSON }, // ✅ store array
  skills: { type: DataTypes.JSON }, // ✅ store array
});
