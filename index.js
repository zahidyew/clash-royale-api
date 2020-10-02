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
// get all the cards in CR
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
      .then(json => CR_cards.setRarity(json.items, res, req))
      .catch((error) => console.log(error))
})

// .../players?id= . Need player's id without the #. Get player's info
app.get('/players', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/players/%23' + req.query.id

   fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN
      }
   })
      .then(response => checkError(response))
      .then(json => res.json(json))
      .catch((error) => console.log(error))
})

// get player's battlelog
app.get('/players/battlelog', (req, res) => {
   let url =  `https://proxy.royaleapi.dev/v1/players/%23${req.query.id}/battlelog`

   fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN
      }
   })
      .then(response => checkError(response))
      .then(json => res.json(json))
      .catch((error) => console.log(error))
})

// get player's upcoming chests
app.get('/players/chests', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/players/%23${req.query.id}/upcomingchests`

   fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN
      }
   })
      .then(response => checkError(response))
      .then(json => res.json(json))
      .catch((error) => console.log(error))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT)
})


