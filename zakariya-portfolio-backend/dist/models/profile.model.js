"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Profile extends sequelize_1.Model {
}
exports.Profile = Profile;
Profile.init({
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    bio: sequelize_1.DataTypes.TEXT,
    location: sequelize_1.DataTypes.STRING,
    nationality: sequelize_1.DataTypes.STRING,
    availability: sequelize_1.DataTypes.STRING,
    dateOfBirth: sequelize_1.DataTypes.DATE,
    email: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    github: sequelize_1.DataTypes.STRING,
    twitter: sequelize_1.DataTypes.STRING,
    linkedin: sequelize_1.DataTypes.STRING,
    expectedSalary: sequelize_1.DataTypes.FLOAT,
    ownACar: sequelize_1.DataTypes.BOOLEAN,
    haveDrivingLicense: sequelize_1.DataTypes.BOOLEAN,
    noticePeriod: sequelize_1.DataTypes.STRING,
    immigrationStatus: sequelize_1.DataTypes.STRING,
    referees: sequelize_1.DataTypes.TEXT,
    willingToRelocate: sequelize_1.DataTypes.BOOLEAN,
    languages: sequelize_1.DataTypes.TEXT,
    skills: sequelize_1.DataTypes.TEXT,
}, {
    sequelize: database_1.sequelize,
    modelName: "Profile",
});
