const cards = {
   "Knight": "Common",
   "Archers": "Common",
   "Goblins" : "Common",
   "Giant": "Rare",
   "P.E.K.K.A": "Epic",
   "Minions": "Common",
   "Balloon": "Epic",
   "Witch": "Epic",
   "Barbarians": "Common",
   "Golem": "Epic",
   "Skeletons": "Common",
   "Valkyrie": "Rare",
   "Skeleton Army": "Epic",
   "Bomber": "Common",
   "Musketeer": "Rare",
   "Baby Dragon": "Epic",
   "Prince": "Epic",
   "Wizard": "Rare",
   "Mini P.E.K.K.A": "Rare",
   "Spear Goblins": "Common",
   "Giant Skeleton": "Epic",
   "Hog Rider": "Rare",
   "Minion Horde": "Common",
   "Ice Wizard": "Legendary",
   "Royal Giant": "Common",
   "Guards": "Epic",
   "Princess": "Legendary",
   "Dark Prince": "Epic",
   "Three Musketeers": "Rare",
   "Lava Hound": "Legendary",
   "Ice Spirit": "Common",
   "Fire Spirits": "Common",
   "Miner": "Legendary",
   "Sparky": "Legendary",
   "Bowler": "Epic",
   "Lumberjack": "Legendary",
   "Battle Ram": "Rare",
   "Inferno Dragon": "Legendary",
   "Ice Golem": "Rare",
   "Mega Minion": "Rare",
   "Dart Goblin": "Rare",
   "Goblin Gang": "Common",
   "Electro Wizard": "Legendary",
   "Elite Barbarians": "Common",
   "Hunter": "Epic",
   "Executioner": "Epic",
   "Bandit": "Legendary",
   "Royal Recruits": "Common",
   "Night Witch": "Legendary",
   "Bats": "Common",
   "Royal Ghost": "Legendary",
   "Ram Rider": "Legendary",
   "Zappies": "Rare",
   "Rascals": "Common",
   "Cannon Cart": "Epic",
   "Mega Knight": "Legendary",
   "Skeleton Barrel": "Common",
   "Flying Machine": "Rare",
   "Wall Breakers": "Epic",
   "Royal Hogs": "Rare",
   "Goblin Giant": "Epic",
   "Fisherman": "Legendary",
   "Magic Archer": "Legendary",
   "Electro Dragon": "Epic",
   "Firecracker": "Common",
   "Elixir Golem": "Rare",
   "Battle Healer": "Rare",
   "Skeleton Dragons": "Common",
   "Cannon": "Common",
   "Goblin Hut": "Rare",
   "Mortar": "Common",
   "Inferno Tower": "Rare",
   "Bomb Tower": "Rare",
   "Barbarian Hut": "Rare",
   "Tesla": "Common",
   "Elixir Collector": "Rare",
   "X-Bow": "Epic",
   "Tombstone": "Rare",
   "Furnace": "Rare",
   "Goblin Cage": "Rare",
   "Fireball": "Rare",
   "Arrows": "Common",
   "Rage": "Epic",
   "Rocket": "Rare",
   "Goblin Barrel": "Epic",
   "Freeze": "Epic",
   "Mirror": "Epic",
   "Lightning": "Epic",
   "Zap": "Common",
   "Poison": "Epic",
   "Graveyard": "Legendary",
   "The Log": "Legendary",
   "Tornado": "Epic",
   "Clone": "Epic",
   "Earthquake": "Rare",
   "Barbarian Barrel": "Epic",
   "Heal Spirit": "Rare",
   "Giant Snowball": "Common",
   "Royal Delivery": "Common",
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
   /* let name = []

   for(let i = 0; i < data.length; i ++) {
      name[i] = data[i].name
   }
   res.json(name) */

   res.json(data)
   //console.log(json.items[0].name)
}

exports.setRarity = setRarity