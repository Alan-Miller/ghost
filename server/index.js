require ('dotenv').config()
const express = require('express'), 
      bodyParser = require('body-parser'),
      massive = require('massive'),
      { PG_STRING, SERVER_PORT } = process.env
const app = express()

app.use(bodyParser.json())
massive(PG_STRING).then(db => app.set('db', db))

app.get('/api/ghost', (req, res) => {
  app.get('db').get_ghost().then(ghosts => {
    res.status(200).send(ghosts[0])
  })
})

app.put('/api/ghost', (req, res) => {
  app.get('db').edit_ghost([req.body.ghost]).then(ghosts => {
    res.status(200).send(ghosts[0])
  })
})

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}.`))