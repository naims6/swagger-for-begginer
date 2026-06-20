import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
const app = express();

const file = fs.readFileSync("./swagger.yml", "utf-8");
const swaggerDocument = YAML.parse(file);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
