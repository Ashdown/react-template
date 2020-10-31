const express = require('express')
const { graphqlHTTP } = require("express-graphql")
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const drinksSchema = require('./schema/drinks-schema.js')
const router = require('./routes/router.js')

const app = express();
const port = 4000
const staticDirectory = `//localhost:${port}/static/`

const config = require('./webpack/webpack-run-local.config')
const webpack = require('webpack')

const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))

app.use(cors())
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))

app.use(require('webpack-hot-middleware')(compiler));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => res.render('home.ejs', {static_directory: staticDirectory}))
app.get('/animals', (req, res) => res.render('home.ejs', {static_directory: staticDirectory}))
app.get('/people', (req, res) => res.render('home.ejs', {static_directory: staticDirectory}))
app.get('/tools', (req, res) => res.render('home.ejs', {static_directory: staticDirectory}))

//rest server
app.use('/api', router)

//graphql server
app.use('/api2', graphqlHTTP({
    schema: drinksSchema,
    graphiql: true
}))

app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log(`Server running on port ${port}`)
})

module.exports = app;