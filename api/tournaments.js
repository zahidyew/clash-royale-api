const express = require('express')
const router = express.Router();
const fetchWrapper = require('../utils/fetchWrapper')

// get all tournaments with the given name
router.get('/', (req, res) => {
   let query = ""
   // optional queries
   if (req.query.limit != undefined) { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/tournaments/?name=${req.query.name}` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get the tournament with the given id
router.get('/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/tournaments/%23${req.params.id}`
   fetchWrapper.goFetch(url, req, res, "default")
})

module.exports = router 