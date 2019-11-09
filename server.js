const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.get('/love-calculator', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000)