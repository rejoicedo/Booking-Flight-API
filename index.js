import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/flightRoute.js";

/*
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
*/


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello from Express"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(port, () => console.log(`Server is running on port: http://localhost:${port}`));
