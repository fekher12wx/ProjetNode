import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UsersRoutes from "./api/routes/UsersRoutes.js";
import ConfirmeRoutes from "./api/routes/ConfirmeRoutes.js"; 
import ClientRoutes from "./api/routes/ClientRoutes.js";  
import AdminRoutes from "./api/routes/AdminRoutes.js";
import AuthRoutes from "./api/routes/AuthRoutes.js"; 
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import bcrypt from "bcrypt";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

if (!process.env.MONGO) {
  console.error(" MONGO environment variable is missing!");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log(" Connecté à MongoDB");
  } catch (error) {
    console.error(" Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log(" MongoDB déconnecté!");
});

mongoose.connection.on("connected", () => {
  console.log(" MongoDB connecté!");
});
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/users", UsersRoutes);
app.use("/api/confirme", ConfirmeRoutes);
app.use("/api/clients", ClientRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/auth", AuthRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Serveur démarré sur le port ${PORT}`);
  });
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log(" Connexion MongoDB fermée.");
  process.exit(0);
});
