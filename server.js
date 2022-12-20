import express from "express"

const app = express();
const Port = 3000;

app.get('/character', (req, res) => {
  app.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});