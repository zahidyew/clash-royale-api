## Clash Royale API

Built using the official <a href="https://developer.clashroyale.com/#/">Clash Royale API</a>. Implemented all the endpoints except the discontinued ones. Added more data into the ./cards enpoint by adding Card Rarity and Elixir Cost for each card. <br>

To use this API you must first create an account on the official <a href="https://developer.clashroyale.com/#/">Clash Royale API</a> in order to create your API key. Read <a href="https://docs.royaleapi.com/#/proxy">this</a> to use the official API with dynamic IP addresses. After that create a config.env file for the project and copy paste your Token into the config.env file such as <br>
````
  TOKEN = yourTokenHere
````

Some examples of endpoints/response:
1) .../cards <br>
Response:
````
  [
    {
        "name": "Knight",
        "id": 26000000,
        "maxLevel": 13,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
        },
        "rarity": "Common",
        "elixirCost": 3
    },
    {
        "name": "Archers",
        "id": 26000001,
        "maxLevel": 13,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
        },
        "rarity": "Common",
        "elixirCost": 3
    },...
````

2) .../clans?name=reddit banana&limit=5 <br>
Response: 
````
  {
    "items": [
        {
            "tag": "#2YU29UV",
            "name": "reddit banana",
            "type": "inviteOnly",
            "badgeId": 16000032,
            "clanScore": 46812,
            "clanWarTrophies": 1680,
            "location": {
                "id": 57000001,
                "name": "North America",
                "isCountry": false
            },
            "requiredTrophies": 4000,
            "donationsPerWeek": 804,
            "clanChestLevel": 1,
            "clanChestMaxLevel": 0,
            "members": 50
        },
        {
            "tag": "#L9QUV8CJ",
            "name": "Baked Bananas",
            "type": "open",
            "badgeId": 16000029,
            "clanScore": 3603,
            "clanWarTrophies": 28,
            "location": {
                "id": 57000006,
                "name": "International",
                "isCountry": false
            },
            "requiredTrophies": 0,
            "donationsPerWeek": 44,
            "clanChestLevel": 1,
            "clanChestMaxLevel": 0,
            "members": 3
        },...
````
<br><br>
This project is built to practice Node.js and Express.js <br>
