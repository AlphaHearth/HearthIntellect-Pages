const hearthIntellectAPIBaseURL = 'http://robertshome.com.cn/hearth/'

const cssBaseURL = '/static/css'
const jsBaseURL = '/static/js'
const imageBaseURL = '/static/images'

const port = 3000

const express = require('express')
const app = express()

app.use(cssBaseURL, express.static(path.join(__dirname, 'css')))
app.use(jsBaseURL, express.static(path.join(__dirname, 'js')))
app.use(imageBaseURL, express.static(path.join(__dirname, 'images')))

app.listen(port, function () {
  console.log(`HearthIntellect pages listening on port ${port}!`)
})