const express = require('express')
const helmet = require('helmet')

const getPlaylist = require('../playlist/getPlaylist')
const playEpisodes = require('../episodes/playEpisodes')

const app = express()
const port = process.env.PORT || 3333

app.use(helmet())

app.get('/playlist', async (req, res, next) => {
  let { episodeCount = 1 } = req.query

  // Ensure 1 < episodeCount < 5
  episodeCount = Math.max(episodeCount, 1)
  episodeCount = Math.min(episodeCount, 5)

  const playlist = await getPlaylist(episodeCount)

  // Eventual TODO: remove `path` from episodes. I don't think we can do it right now, though.

  res.json(playlist)
})

app.put('/play', express.json(), (req, res, next) => {
  const playlist = req.body

  if (Object.keys(playlist).length === 0) {
    return res.status(400).json({
      error: 'No playlist specified'
    })
  }

  playEpisodes(playlist)

  res.json(playlist)
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
