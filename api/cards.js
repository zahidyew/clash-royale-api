const express = require('express')
const router = express.Router();
const fetchWrapper = require('../utils/fetchWrapper')
const cards = require('../data/cardsData')

// add new properties into each object
function assignNewProps(item) {
   if (cards.hasOwnProperty(item.name)) {
      //console.log(item.name)
      Object.assign(item, { rarity: cards[item.name].rarity })
      Object.assign(item, { elixirCost: cards[item.name].elixir })
   } else { 
      // else either missed or most probably a new card
      Object.assign(item, { rarity: "tbd" })
      Object.assign(item, { elixirCost: "tbd" })
      //return item;
   }
}

// filter the returned response according to the user's query. TBC
function queryFilter(items, query) {
   let myArray = []

   for(let i = 0; i < items.length; i++) {
      //console.log(items[i].name  + " " + items[i].rarity)
      if (items[i].rarity.toLowerCase() == query.rarity || items[i].rarity == query.rarity) {
         myArray.push(items[i])
      }
   }
   return myArray
}

// func called in index to add more props into cards
function setRarity(data, res, req) {
   // add new key/value pair to an object
   data.map(assignNewProps)

   // check if the request has query attached to it
   if (Object.keys(req.query).length === 0) { res.json(data) }
   else { res.json(queryFilter(data, req.query)) }
   
   //console.log("1 " + data[0].rarity)
}

// get all the cards in CR
router.get('/', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/cards'
   fetchWrapper.goFetch(url, req, res, "setRarityFirst")
})

module.exports = {
   router,
   setRarity
}

/* module.exports = router
exports.setRarity = setRarity */