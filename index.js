import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();


if (!process.env.MONGO) {
  console.error("MONGO environment variable is missing!");
  process.exit(1);
}


const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connecté à MongoDB");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
};


mongoose.connection.on("disconnected", () => {
  console.log(" MongoDB déconnecté!");
});

mongoose.connection.on("connected", () => {
  console.log(" MongoDB connecté!");
});

// Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API avec MongoDB!");
});

// Démarrage du serveur
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Serveur démarré sur le port ${PORT}`);
  conn();
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log(" Connexion MongoDB fermée.");
  process.exit(0);
});
