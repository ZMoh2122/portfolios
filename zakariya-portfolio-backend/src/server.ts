import app from "./app";
import { sequelize } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.sync();
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
