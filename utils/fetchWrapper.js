const fetch = require('node-fetch')
const cards = require('../api/cards')

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
         if (mode === "default") { res.json(json) }
         else if (mode === "setRarityFirst") { cards.setRarity(json.items, res, req) }
         else { console.log("Passed mode is incorrect") };
      })
      .catch((error) => console.log(error))
}

exports.goFetch = goFetch