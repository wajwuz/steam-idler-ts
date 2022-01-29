import express, { Request, Response } from "express";
import { db, create } from "../databases/database.model";
import {v4 as uuidv4} from "uuid";
import { IdlingUser } from "../items/steam.item";

export let steamRouter = express.Router();

steamRouter.post("/put", async (req: Request, res: Response) => {
    let idlingUser: IdlingUser = req.body;

    create(idlingUser, (err: Error, id: number) => {
        if (err) {
          return res.status(500).json({"message": err.message});
        }

        res.status(200).json({"id": id});
    });
});