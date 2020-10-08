const express = require('express')
const router = express.Router();
const fetchWrapper = require('../utils/fetchWrapper')

// get all clans that fits the query request. Clan name is mandatory field
router.get('/', (req, res) => {
   let query = ""
   // these 4 queries are optional.
   if(req.query.minMembers != undefined) { query = query + `&minMembers=${req.query.minMembers}`}
   if(req.query.maxMembers != undefined) { query = query + `&maxMembers=${req.query.maxMembers}`}
   if(req.query.minScore != undefined) { query = query + `&minScore=${req.query.minScore}`}
   if(req.query.limit != undefined) { query = query + `&limit=${req.query.limit}`}

   let url = `https://proxy.royaleapi.dev/v1/clans?name=${req.query.name}` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan with the given id. Do not include # 
router.get('/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}`
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan's log of river race
router.get('/:id/riverracelog', (req, res) => {
   let query = ""
   // optional queries
   if (req.query.limit != undefined) { query = query + `&limit=${req.query.limit}` }

   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/riverracelog?` + query
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan's current members
router.get('/:id/members', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/members`
   fetchWrapper.goFetch(url, req, res, "default")
})

// get clan's current river race
router.get('/:id/currentriverrace', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/clans/%23${req.params.id}/currentriverrace`
   fetchWrapper.goFetch(url, req, res, "default")
})

module.exports = router