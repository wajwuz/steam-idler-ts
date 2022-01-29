let config: ConfigModel = require("../models/config.model.json");
import { ConfigModel } from "../models/config.model";

import { IdlingUser } from "../items/steam.item";

import mysql, { OkPacket } from "mysql2";

export let db = mysql.createConnection({
    host: config.databaseHost,
    port: config.databasePort,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseStorage
}).on("connect", () => {
    console.log(`[DB] Connected to ${config.databaseHost}, using ${config.databaseUser}`);
});

export let create = (idlingUser: IdlingUser, callback: Function) => {  
    db.query(
        config.insertSteamUser,
        [idlingUser.id, idlingUser.steamLogin, idlingUser.uniqueId],
        (err, result) => {
            if (err) {
                callback(err)
            };
            
        let insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
    });
};