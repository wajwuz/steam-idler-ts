import { db } from "./databases/database.model";

import express from "express";
let app = express();

let path = require("path");
import { steamRouter } from "./routes/steam.router";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/steam/", steamRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(3011, async () => {
    await console.log("[EX] App started on locahost:3011");
    db;
});