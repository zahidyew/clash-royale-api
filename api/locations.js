const express = require('express')
const router = express.Router();
const fetchWrapper = require('../utils/fetchWrapper')

// get all locations
router.get('/', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations?` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get a specific location
router.get('/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}`
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan war rankings for a specific location
router.get('/:id/rankings/clanwars', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/clanwars?` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get players rankings for a specific location
router.get('/:id/rankings/players', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/players?` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan rankings for a specific location
router.get('/:id/rankings/clans', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/${req.params.id}/rankings/clans?` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get global tournament rankings
/* router.get('/global/rankings/tournaments/:id', (req, res) => {
   let query = ''
   if (req.query.limit != undefined && req.query.limit != '') { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/locations/global/rankings/tournaments/%23${req.params.id}?` + query
   fetchWrapper.goFetch(url, req, res, "default")
}) */

module.exports = router