require ('dotenv').config()
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , { PG_STRING, SERVER_PORT } = process.env
const app = express()

app.use(bodyParser.json())
massive(PG_STRING).then(db => app.set('db', db))

app.get('/api/ghost', (req, res) => {
  req.app.get('db').get_ghost().then(ghost => {
    res.status(200).send(ghost[0])
  })
})

app.put('/api/ghost', (req, res) => {
  req.app.get('db').edit_ghost([req.body.ghost_name]).then(ghost => {
    res.status(200).send(ghost[0])
  })
})

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}.`))