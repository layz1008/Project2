import express from "express"
import cors from "cors"

const app = express();
const Port = 3000;

app.use(express.json());
app.use(cors());


app.get('/character', (req, res) => {
  app.get('https://rickandmortyapi.com/api/character').then((res) => {
      res.status(200).send(res.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});