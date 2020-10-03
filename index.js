const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const CR_cards = require('./CR-cards')

dotenv.config({ path: './config.env' })

const app = express()

// check fetch request response status
function checkError(response) {
   if (response.status >= 200 && response.status <= 299) {
      return response.json();
   } else {
      //throw Error(response.statusText);
     console.log(response.statusText);
     return response.json();
   }
}

function goFetch(url, req, res, mode) {
   fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN
      }
   })
      .then(response => checkError(response))
      .then(json => {
         if(mode === "default") { res.json(json) }  
         else if (mode === "setRarityFirst") { CR_cards.setRarity(json.items, res, req) }
         else { console.log("Passed mode is incorrect") };
      })
      .catch((error) => console.log(error))
}

// get all the cards in CR
app.get('/cards', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/cards'
   goFetch(url, req, res, "setRarityFirst")
})

// Get player's info. Need player's id without the #. The "%23" is # as url encoded
app.get('/players/:id', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/players/%23' + req.params.id
   goFetch(url, req, res, "default")
})

// get player's battlelog
app.get('/players/battlelog/:id', (req, res) => {
   let url =  `https://proxy.royaleapi.dev/v1/players/%23${req.params.id}/battlelog`
   goFetch(url, req, res, "default")
})

// get player's upcoming chests
app.get('/players/chests/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/players/%23${req.params.id}/upcomingchests`
   goFetch(url, req, res, "default")
})

// get all clans that fits the query request. Clan name is mandatory field
app.get('/clans', (req, res) => {
   let query = ""
   // these 4 queries are optional.
   if(req.query.minMembers != undefined) { query = query + `&minMembers=${req.query.minMembers}`}
   if(req.query.maxMembers != undefined) { query = query + `&maxMembers=${req.query.maxMembers}`}
   if(req.query.minScore != undefined) { query = query + `&minScore=${req.query.minScore}`}
   if(req.query.limit != undefined) { query = query + `&limit=${req.query.limit}`}

   let url = `https://proxy.royaleapi.dev/v1/clans?name=${req.query.name}` + query
   goFetch(url, req, res, "default")
})

// get clan with the given id. Do not include # 
app.get('/clans/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}`
   goFetch(url, req, res, "default")
})

// get clan's log of river race
app.get('/clans/:id/riverracelog', (req, res) => {
   let query = ""
   // optional queries
   if (req.query.limit != undefined) { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/riverracelog?` + query
   goFetch(url, req, res, "default")
})

// get clan's current members
app.get('/clans/:id/members', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/members`
   goFetch(url, req, res, "default")
})

// get clan's current river race
app.get('/clans/:id/currentriverrace', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/currentriverrace`
   goFetch(url, req, res, "default")
})

// get all tournaments with the given name
app.get('/tournaments', (req, res) => {
   let query = ""
   // optional queries
   if (req.query.limit != undefined) { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/tournaments/?name=${req.query.name}` + query
   goFetch(url, req, res, "default")
})

// get the tournament with the given id
app.get('/tournaments/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/tournaments/%23${req.params.id}`
   goFetch(url, req, res, "default")
})

// get all global tournaments 
app.get('/globaltournaments', (req,res) => {
   let url = `https://proxy.royaleapi.dev/v1/globaltournaments`
   goFetch(url, req, res, "default")
})

// get all locations
app.get('/locations', (req, res) => {
   let query = ''
   if(req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations?` + query
   goFetch(url, req, res, "default")
})

// get a specific location
app.get('/locations/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}`
   goFetch(url, req, res, "default")
})

// get clan war rankings for a specific location
app.get('/locations/:id/rankings/clanwars', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/clanwars?` + query
   goFetch(url, req, res, "default")
})

// get players rankings for a specific location
app.get('/locations/:id/rankings/players', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/players?` + query
   goFetch(url, req, res, "default")
})

// get clan rankings for a specific location
app.get('/locations/:id/rankings/clans', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/clans?` + query
   goFetch(url, req, res, "default")
})

// get global tournament rankings
app.get('/locations/global/rankings/tournaments/:id', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/global/rankings/tournaments/%23${req.params.id}?` + query
   goFetch(url, req, res, "default")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT)
})