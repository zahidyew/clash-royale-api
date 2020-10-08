const express = require('express')
const dotenv = require('dotenv')
const fetchWrapper = require('./utils/fetchWrapper')

dotenv.config({ path: './config.env' })

const app = express()

app.use('/cards', require('./api/cards').router)
app.use('/players', require('./api/players'))
app.use('/clans', require('./api/clans'))
app.use('/tournaments', require('./api/tournaments'))
app.use('/locations', require('./api/locations'))

// get all global tournaments 
app.get('/globaltournaments', (req,res) => {
   let url = `https://proxy.royaleapi.dev/v1/globaltournaments`
   fetchWrapper.goFetch(url, req, res, "default")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT)
})