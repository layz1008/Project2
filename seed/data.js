import db from "..db/connection.js";
import Character from "../model/Character"
import rickAndMorty from "../model/rickAndMorty.json" assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase();
  
    await Character.create(rickAndMorty);

  
    await db.close();
  };
  
  insertData();
