const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const app = express()

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use('/love-calculator', (req, res, next) => {
    console.log(chalk.inverse.green('Product By Lê Thanh Sơn'))
    res.sendFile(__dirname + '/public/index.html')
})

app.use((req, res, next) => {
    res.status(404).send('<h1 style="color:red">NOT PAGE 404</h1>')
})

app.listen(3000)