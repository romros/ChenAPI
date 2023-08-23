const dotenv = require("dotenv");

// Decideix quin fitxer .env carregar basat en NODE_ENV
const envFile = process.env.NODE_ENV === "dev" ? ".env.local" : ".env";
dotenv.config({ path: envFile });

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
