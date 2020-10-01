const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

const CR_cards = require('./CR-cards')

dotenv.config({ path: './config.env' })

const app = express()

function checkError(response) {
   if (response.status >= 200 && response.status <= 299) {
      return response.json();
   } else {
      throw Error(response.statusText);
   }
}

//https://api.clashroyale.com/v1/clans?minMembers=40
app.get('/cards', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/cards'
   
   fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN  
      }
   })
      .then(response => checkError(response))
      .then(json => CR_cards.setRarity(json.items, res))
      .catch((error) => console.log(error))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server startrd on port " + PORT)
})


