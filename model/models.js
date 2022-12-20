import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'
fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    fsPromises.writeFile("./rickAndMorty.json", JSON.stringify(data))
})
.catch(error=> console.error(error))