const express = require('express')
const router = express.Router();
const fetchWrapper = require('../utils/fetchWrapper')

// Get player's info. Need player's id without the #. The "%23" is # as url encoded
router.get('/:id', (req, res) => {
   let url = 'https://proxy.royaleapi.dev/v1/players/%23' + req.params.id
   fetchWrapper.goFetch(url, req, res, "default")
})

// get player's battlelog
router.get('/battlelog/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/players/%23${req.params.id}/battlelog`
   fetchWrapper.goFetch(url, req, res, "default")
})

// get player's upcoming chests
router.get('/chests/:id', (req, res) => {
   let url = `https://proxy.royaleapi.dev/v1/players/%23${req.params.id}/upcomingchests`
   fetchWrapper.goFetch(url, req, res, "default")
})

module.exports = router