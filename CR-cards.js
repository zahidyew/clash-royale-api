const cards = {
   'Knight': 'common',
   'Archers': 'common'
}

function assignRarity(item) {
   if (cards.hasOwnProperty(item.name)) {
      //console.log(item.name)
      Object.assign(item, { rarity: cards[item.name] })
   } else {
      return item;
   }
}

function setRarity(data, res) {
   // add new key/value pair to an object
   data.map(assignRarity)

   res.json(data)
   //console.log(json.items[0].name)
}

exports.setRarity = setRarity