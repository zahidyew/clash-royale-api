const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config({ path: './config.env' })

const app = express()

//https://api.clashroyale.com/v1/clans?minMembers=40

app.get('/cards', (req, res) => {
   // fetch data here
   fetch('https://api.clashroyale.com/v1/cards', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': ' Bearer ' + process.env.TOKEN  
      }
   })
   .then(response => response.json())
   .then(json => {
      //res.json(json)

      // add new key/value pair to an object
      let data = json.items;
      Object.assign(data[0], {rarity: "common"})

      res.json(data)

      //console.log(json.items[0].name)
   })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server startrd on port " + PORT)
})
