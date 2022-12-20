import db from "..db/connection.js";
import name from "../models/Names.js"
import species from "../models/species.js"
import gender from "../models/gender.js"
import episode from "../models/episode.js"



const insertData = async () => {
    await db.dropDatabase();
}