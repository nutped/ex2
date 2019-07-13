const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hataipan Weerapin'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/context', (req, res) => res.send('หน้า context'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
